var $nav = $('nav');
// $navTop define a que distancia de arriba se encuentra el elemento
var $navTop=$nav.offset().top;
var pegarNav=function(){
	var $scrollTop = $(window).scrollTop();
	//	comparamos la posición del elemento nav con la que debería tener
	if($scrollTop >= $navTop){
		$nav.addClass('sticky')
	} else {
		$nav.removeClass('sticky')
	}
	//	captura el elemento scroll y cambia background a rojo
	$('body').css('background','red');
	//	muestra en nav el valor de las distintas variables
	$('nav').text('El scroll es ' + $scrollTop +' px y $navTop es ' + $navTop + 'px');
}
//escucha la función scroll de window y ejecuta la función pegarNav
$(window).on('scroll',pegarNav);	
