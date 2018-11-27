$(document).ready(function() {
	$(".game").hide();
	$(".img_center").click(function(){
		$('.game').show();
	});
});

// Escopo global
var p1 = 1;
var p2 = 2;
var v = 1;

var tabu = [];
tabu['t1'] = Array();
tabu['t2'] = Array();
tabu['t3'] = Array();

function start() {
	// Pego os nomes dos jogadores
	var nome_j1 = document.getElementById("j1").value;
	var nome_j2 = document.getElementById("j2").value;

	// Insiro os nomes em um local determinado
	document.getElementById("n_j1").innerHTML = nome_j1;
	document.getElementById("n_j2").innerHTML = nome_j2;
	
	tabuleiro();
}

function tabuleiro() {
	var quadrante = document.getElementsByClassName('border');

	for (var c = 0; c <= 9; c++) {
		quadrante[c].onclick = function(){ eventos(this);};
	}
}

function eventos(quadrante) {
	v1 = document.createElement('img');
	v1.src = "imagens/marcacao_2.png";
	v1.style = 'display: flex; margin: 0 auto;';

	v2 = document.createElement('img');
	v2.src = 'imagens/marcacao_1.png';
	v2.style = 'display: flex; margin: 0 auto;';

	if (v == p1) {
		quadrante.appendChild(v1);
		v++;
		quadrante.setAttribute('onclick', '');

		var qid = quadrante.id;
		tabu[qid.substring(0, 2)][qid.substring(2, 3)] = 1;

	}
	else {
		quadrante.appendChild(v2);
		v--;
		quadrante.setAttribute('onclick', '');
		var qid = quadrante.id;
		tabu[qid.substring(0, 2)][qid.substring(2, 3)] = 2;
	}

	condicoes(qid, quadrante);
}

function condicoes(qid, quadrante) {
	
	for (var c = 0; c < 3; c++) {
		// Vitoria X
		if (tabu[qid.substring(0, 2)][0] == 1) {
			if (tabu[qid.substring(0, 2)][1] == 1) {
				if (tabu[qid.substring(0, 2)][2] == 1) {
					document.getElementById('resultado_j1').innerHTML = 'Vitorioso';
					document.getElementById('resultado_j2').innerHTML = 'Derrotado';
					$('.border').attr('onclick', '');
				}
			}
		} else if (tabu[qid.substring(0, 2)][0] == 2) {
			if (tabu[qid.substring(0, 2)][1] == 2) {
				if (tabu[qid.substring(0, 2)][2] == 2) {
					document.getElementById('resultado_j1').innerHTML = 'Derrotado';
					document.getElementById('resultado_j2').innerHTML = 'Vitorioso';
					$('.border').attr('onclick', '');
				}
			}
		}

		condicoes2();
		condicoes3();
	}

}

function condicoes2() {
	for (var c = 0; c < 3; c++) {
		// Vitoria Y
		if (tabu['t1'][c] == 1) {
			if (tabu['t2'][c] == 1) {
				if (tabu['t3'][c] == 1) {
					document.getElementById('resultado_j1').innerHTML = 'Vitorioso';
					document.getElementById('resultado_j2').innerHTML = 'Derrotado';
					$('.border').attr('onclick', '');
				}
			}
		} else if (tabu['t1'][c] == 2) {
			if (tabu['t2'][c] == 2) {
				if (tabu['t3'][c] == 2) {
					document.getElementById('resultado_j1').innerHTML = 'Derrotado';
					document.getElementById('resultado_j2').innerHTML = 'Vitorioso';
					$('.border').attr('onclick', '');
				}
			}
		}
	}
}

function condicoes3() {
	for (var c = 0; c < 3; c++) {
		// Vitoria Y
		if (tabu['t1'][0] == 1 || tabu['t1'][2] == 1) {
			if (tabu['t2'][1] == 1) {
				if (tabu['t3'][2] == 1 || tabu['t3'][0] == 1) {
					document.getElementById('resultado_j1').innerHTML = 'Vitorioso';
					document.getElementById('resultado_j2').innerHTML = 'Derrotado';
					$('.border').attr('onclick', '');
				}
			}
		} else if (tabu['t1'][0] == 2 || tabu['t1'][2]) {
			if (tabu['t2'][1] == 2) {
				if (tabu['t3'][2] == 2 || tabu['t3'][0] == 2) {
					document.getElementById('resultado_j1').innerHTML = 'Derrotado';
					document.getElementById('resultado_j2').innerHTML = 'Vitorioso';
					$('.border').attr('onclick', '');
				}
			}
		}
	}
}