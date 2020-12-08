$(document).ready(main);

// ################## CAMPOS ##################
var contador = true;
var contraerJuegos = true;
var contraerApp = true;

function main(){
	
	// ################## FUNCIONES ##################
	//Evitar el uso del menú contextual (clic derecho).
	document.oncontextmenu = function(){return false}
	
	// Para ver u ocultar el menu en modo movil.
	$('.menu_bar').click(function(){
		if(contador){
			contador = false;
			$('nav').animate({
				left: '0'
			});
		} else {
			contador = true;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
	
	// Cambia la opacidad del logo si se pasa el raton por encima.
	$('#logo')
	.mouseenter(function(){
		$('#logo').animate({
			opacity: '0.5'
		}).delay("fast");
	})
	.mouseleave(function(){
		$('#logo').animate({
			opacity: '1'
		}).delay("fast");
	});
	
	// Contraer o expandir juegos.
	$('.btn_contraer_juegos').click(function(){
		if(contraerJuegos){
			contraerJuegos = false;
			$('.contractor_juegos').hide(200);
			$(".btn_contraer_juegos span").removeClass("icon-circle-up");
			$(".btn_contraer_juegos span").addClass("icon-circle-down");
		} else {
			contraerJuegos = true;
			$('.contractor_juegos').show(200);
			$(".btn_contraer_juegos span").removeClass("icon-circle-down");
			$(".btn_contraer_juegos span").addClass("icon-circle-up");
		}
	});
	
	$('.btn_contraer_app').click(function(){
		if(contraerApp){
			contraerApp = false;
			$('.contractor_app').hide(200);
			$(".btn_contraer_app span").removeClass("icon-circle-up");
			$(".btn_contraer_app span").addClass("icon-circle-down");
		} else {
			contraerApp = true;
			$('.contractor_app').show(200);
			$(".btn_contraer_app span").removeClass("icon-circle-down");
			$(".btn_contraer_app span").addClass("icon-circle-up");
		}
	});
	
};
