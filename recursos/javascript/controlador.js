$(document).ready(main);

// ################## CAMPOS ##################
var contador = true;
var contraerJuegos = true;
var contraerApp = true;

function main(){
	
	// ################## EVENTOS ##################
	// Al cargar la pagina cambiara el fondo en funcion de la estacion del anio.
	$(document).ready(function(){
		setFondoSegunEstacion();
	});
	
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
	$('.logo')
	.mouseenter(function(){
		$(".logo").attr("src","recursos/imagenes/logo2.png");
	})
	.mouseleave(function(){
		$(".logo").attr("src","recursos/imagenes/logo1.png");
	});
	
	// Contraer o expandir juegos.
	$('.btn_contraer_pc').click(function(){
		if(contraerJuegos){
			contraerJuegos = false;
			$('.contractor_pc').hide(200);
			$(".btn_contraer_pc span").removeClass("icon-circle-up");
			$(".btn_contraer_pc span").addClass("icon-circle-down");
		} else {
			contraerJuegos = true;
			$('.contractor_pc').show(200);
			$(".btn_contraer_pc span").removeClass("icon-circle-down");
			$(".btn_contraer_pc span").addClass("icon-circle-up");
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
	
	
	
	// ################## FUNCIONES ##################
	// 0 Primavera - 21 marzo(3) al 20 junio(6).
	// 1 Verano - 21 junio(6) al 22 septiembre(9).
	// 2 Otonio - 22 septiembre(9) al 20 diciembre(12).
	// 3 Invierno - 21 diciembre(12) al 20 de marzo(3).
	function setFondoSegunEstacion(){
		var fecha = new Date();
		var mes = fecha.getMonth() + 1;
		
		// Primavera
		if(mes > 3 && mes < 7){
			$("body").css("background","#518d5e");
			$("body").css('background-image','url("recursos/imagenes/bg_primavera.png")');
		// Verano
		}else if(mes > 6 && mes < 10){
			$("body").css("background","#05b7ff");
			$("body").css('background-image','url("recursos/imagenes/bg_verano.png")');
		// Otonio
		}else if(mes > 9){
			$("body").css("background","#b58550");
			$("body").css('background-image','url("recursos/imagenes/bg_otonio.png")');
		// Invierno
		}else{
			$("body").css("background","#aeabb1");
			$("body").css('background-image','url("recursos/imagenes/bg_invierno.png")');
		}
	}
	
};
