$(document).ready(main);

// ################## CAMPOS ##################
var menuContraido = true;
var contraerQR = false;
var contraerJuegos = true;
var contraerApp = true;

function main(){
	// ################## EVENTOS ##################
	// Al cargar la pagina cambiara el fondo en funcion de la estacion del anio.
	$(document).ready(function(){
		setFondoSegunEstacion();
		actualizarElementosScroll();
		
		// Pedir que la imagen QR se muestre en bloque y se oculte.
		$('.img-qr').css("display", "block").hide();
		
		// Animacion al cargar.
		$('.cuerpo').hide();
		$('.cuerpo').fadeIn(300);
	});
	
	//Evitar el uso del menú contextual (clic derecho).
	document.oncontextmenu = function(){return false}
	
	// Para ver u ocultar el menu en modo movil.
	$('.menu_bar').click(function(){
		if(menuContraido){
			menuContraido = false;
			mostrarMenuMovil(true);
			
		} else {
			menuContraido = true;
			mostrarMenuMovil(false);
		}
	});
	
	// Si el menu esta desplegado y se pulsa en alguna parte del cuerpo, cerrara el menu.
	$('.cuerpo').click(function(){
		if(!menuContraido){
			menuContraido = true;
			mostrarMenuMovil(false);
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
	
	// Mostrar u ocultar QR.
	$('.btn-ver-qr').click(function(){
		if(contraerQR){
			contraerQR = false;
			$('.img-qr').slideUp(200);
			$(".btn-ver-qr").removeClass("icon-eye-blocked");
			$(".btn-ver-qr").addClass("icon-eye");
		} else {
			contraerQR = true;
			
			$('.img-qr').slideDown(200);
			$(".btn-ver-qr").removeClass("icon-eye");
			$(".btn-ver-qr").addClass("icon-eye-blocked");
		}
	});
	
	// Boton volver (politica de privacidad).
	$('.btn-volver').click(function(){
		window.history.back();
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
	
	// Boton subir arriba.
	$('.btn-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	
	// Al bajar el Scroll.
	$(window).scroll(function(){
		actualizarElementosScroll();
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
	
	function refrescarBarraLectura(){
		var pxAlto = $(document).height();
		var posicionScroll = $(window).height() + $(this).scrollTop();
		var total = pxAlto - $(window).height();
		var porcentaje = 100 - (((pxAlto - posicionScroll) * 100) / total);
		
		$('progress').attr("value", porcentaje);
	}
	
	// Hacer aparecer y desaparecer el boton de subir arriba y la barra de progreso.
	function actualizarElementosScroll(){
		if($(this).scrollTop() > 0){
			$('.btn-arriba').fadeIn(300);
			$('.progreso-lectura').fadeIn(100);
			refrescarBarraLectura();
		}else{
			$('.btn-arriba').fadeOut(300);
			$('.progreso-lectura').fadeOut(100);
		}
	}
	
	// Mostrar u ocultar el menu.
	function mostrarMenuMovil(mostrar){
		if(mostrar){
			$('nav').animate({
				left: '0'
			});
			$(".bt-menu span").hide();
			$(".bt-menu span").removeClass("icon-menu");
			$(".bt-menu span").addClass("icon-arrow-left2");
			$(".bt-menu span").fadeIn(200);
		}
		else{
			$('nav').animate({
				left: '-100%'
			});
			$(".bt-menu span").hide()
			$(".bt-menu span").removeClass("icon-arrow-left2");
			$(".bt-menu span").addClass("icon-menu");
			$(".bt-menu span").fadeIn(200);
		}
	}
	
};
