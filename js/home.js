//=====================================================================
// Formar el slide de imagenes Background
//=====================================================================
$(window).load(function(){
	// ====== Cufon =================================
	Cufon('#menu div a,.text_footer', { fontFamily: 'MyriadProSemibold' });

	var conte_general		= $("#contenedor");
	var alto_wind			= $(window).height();
	
	//Definir alto del contenedor general =========================
	conte_general.css({height:alto_wind});
	
	var background			= $("#background");
	var sub_head			= $(".sub-head");	
	var img_head			= $(".img_head");
	var separador_menus 	= $(".separador_menus");
	var menu 				= $("#menu");
	var footer 				= $("#footer");
	var content_footer		= $(".content_footer");
	var navWidth 			= $("#contenedor").width();
	var botones_next_prev	= $(".botones_next_prev");
	var header				= $(".header");
	var sombra				= $(".sombra");
	var navHeight 			= conte_general.height() * 0.78;
	var navRatio 			= navWidth / navHeight;
	var imagen				= "";
	
	sub_head.show();
	
	//Tamaño del contenedor de imagenes del slide===========================
	background.css({height: navHeight, width: navWidth,top:conte_general.height() * 0.11});
	background.css({visibility:"visible", display:"block"});
	
	//Posición y tamaño de los elementos del header ========================
	sub_head.css({top:(conte_general.height() * 0.11)-sub_head.height()});
	img_head.css({left:(navWidth - img_head.width())/2});
	separador_menus.width(img_head.width()* 0.9);
	menu.css({left:(navWidth - menu.width())/2});
	menu.children("div").css({height:conte_general.height() * 0.04,"margin-top":img_head.height() * 0.01});
	header.height(conte_general.height() * 0.11);
	sombra.css({left:(conte_general.width() - 1000)/2});
	ajustar_imagen($(".img_header_back"),(navWidth/header.height()),navWidth,header.height());
	
	//Posición de los botones para cambiar de slide ========================
	botones_next_prev.css({left:(navWidth - botones_next_prev.width())/2,top:(navHeight - botones_next_prev.height())/2});
		
	// Ajustar el footer =============================================
	footer.css({"top":conte_general.height() - (conte_general.height()*0.11),height:conte_general.height() * 0.11});
	content_footer.css({left:(navWidth - content_footer.width())/2,top:(footer.height() - content_footer.height())/2});
	ajustar_imagen($(".img_footer_back"),(navWidth/footer.height()),navWidth,footer.height());

	//Ajustar el tamaño de las imagenes del slide ================================
	background.children("img").each(function(index, element) {
		imagen = $(this);
		ajustar_imagen($(this),navRatio,navWidth,navHeight);
	});
	
	//Functión para ajustar tamaño de imagen de footer, header y slide ===============================0
	function ajustar_imagen(img,navradio,navwidth,navheight){
		if (img.width() > 1) picwidth = img.width();
		if (img.height() > 1) picheight = img.height();
		picradio = picwidth / picheight;	
		if (navradio > picradio) {
			var newheight = (navwidth / picwidth) * picheight;
			var newwidth = navwidth;
		} else {
			var newheight = navheight;
			var newWidth = (navheight / picheight) * picwidth;
		}
		
		newtop = 0 - ((newheight - navheight) / 2);
		newleft =  0 - ((newwidth - navwidth) / 2);
		img.attr("width",newwidth);
		img.attr("height",newheight);	
		img.css("top",newtop+"px");
		img.css("left",newleft+"px");
	}

	$(".img_head,.img_footer_back,.content_footer,.img_header_back").show();

	// Comenzar con el slide de imagenes
	//================================================================
	var contador 			= 1;
	var cant_image			= $(".imagen").length;
	var refreshIntervalId	= "";
	$("#imagen-1").show();
	
	time_slide();
	
	function time_slide(){
		refreshIntervalId = setInterval(function(){
			$("#imagen-"+contador).fadeOut(2000);
			if(contador==cant_image){
				contador = 0;
			}
			$("#imagen-"+(contador+1)).fadeIn(2000);
			contador++;
		},8000);
	}
	
	//=== Cambiar el slide con los botones=================0
	$(".btn_slide").click(function(){
		if($(this).attr("id")=="btb_slide_next"){
			clearInterval(refreshIntervalId);
			if(contador==cant_image){
				$("#imagen-"+contador).fadeOut(2000);
				$("#imagen-"+1).fadeIn(2000);
				contador = 1;
			}
			else{
				$("#imagen-"+contador).fadeOut(2000);
				$("#imagen-"+(contador+1)).fadeIn(2000);
				contador++;
			}
		}
		else{
			if(contador==1){
				$("#imagen-"+contador).fadeOut(2000);
				$("#imagen-"+cant_image).fadeIn(2000);
				contador = cant_image;
			}
			else{
				$("#imagen-"+contador).fadeOut(2000);
				$("#imagen-"+(contador-1)).fadeIn(2000);
				contador--;
			}
		}
		
		time_slide();
	});
	
	
	
});	


// Ajustar el slide de imagenes Background cuando se hace resize a la ventana del navegador
$(window).resize(function(){
	
	$(".imagen").removeAttr("width");
	$(".imagen").removeAttr("height");
	
	var conte_general		= $("#contenedor");
	var alto_wind			= $(window).height();

	//Definir alto del contenedor general =========================
	conte_general.css({height:alto_wind});
	
	var background			= $("#background");
	var sub_head			= $(".sub-head");	
	var img_head			= $(".img_head");
	var separador_menus 	= $(".separador_menus");
	var menu 				= $("#menu");
	var footer 				= $("#footer");
	var content_footer		= $(".content_footer");
	var navWidth 			= $("#contenedor").width();
	var botones_next_prev	= $(".botones_next_prev");
	var header				= $(".header");
	var sombra				= $(".sombra");
	var navHeight 			= conte_general.height() * 0.78;
	var navRatio 			= navWidth / navHeight;
	var imagen				= "";
	
	//Tamaño del contenedor de imagenes del slide===========================
	background.css({height: navHeight, width: navWidth,top:conte_general.height() * 0.11});
	background.css({visibility:"visible", display:"block"});
	
	//Posición y tamaño de los elementos del header ========================
	sub_head.css({top:(conte_general.height() * 0.11)-sub_head.height()});
	img_head.css({left:(navWidth - img_head.width())/2});
	separador_menus.width(img_head.width()* 0.9);
	menu.css({left:(navWidth - menu.width())/2});
	menu.children("div").css({height:conte_general.height() * 0.04,"margin-top":img_head.height() * 0.01});
	header.height(conte_general.height() * 0.11);
	sombra.css({left:(conte_general.width() - 1000)/2});
	ajustar_imagen($(".img_header_back"),(navWidth/header.height()),navWidth,header.height());
	
	//Posición de los botones para cambiar de slide ========================
	botones_next_prev.css({left:(navWidth - botones_next_prev.width())/2,top:(navHeight - botones_next_prev.height())/2});
		
	// Ajustar el footer =============================================
	footer.css({"top":conte_general.height() - (conte_general.height()*0.11),height:conte_general.height() * 0.11});
	content_footer.css({left:(navWidth - content_footer.width())/2,top:(footer.height() - content_footer.height())/2});
	ajustar_imagen($(".img_footer_back"),(navWidth/footer.height()),navWidth,footer.height());

	//Ajustar el tamaño de las imagenes del slide ================================
	background.children("img").each(function(index, element) {
		imagen = $(this);
		ajustar_imagen($(this),navRatio,navWidth,navHeight);
	});
	
	//Functión para ajustar tamaño de imagen de footer, header y slide ===============================0
	function ajustar_imagen(img,navradio,navwidth,navheight){
		if (img.width() > 1) picwidth = img.width();
		if (img.height() > 1) picheight = img.height();
		picradio = picwidth / picheight;	
		if (navradio > picradio) {
			var newheight = (navwidth / picwidth) * picheight;
			var newwidth = navwidth;
		} else {
			var newheight = navheight;
			var newWidth = (navheight / picheight) * picwidth;
		}
		
		newtop = 0 - ((newheight - navheight) / 2);
		newleft =  0 - ((newwidth - navwidth) / 2);
		img.css({height: newheight, width: newwidth});	
		img.css("top",newtop+"px");
		img.css("left",newleft+"px");
	}

});