$('.accordion').on('click','h2',function(){
	var t = $(this);
	var tp = t.next();
	var p = t.parent().siblings().find('p');
	tp.slideToggle();
	p.slideUp();
});
$('.accordion').on('click','li',function(){
	var t = $(this);
	var tp = t.next();
	var p = t.parent().siblings().find('p');
	tp.slideToggle();
	p.slideUp();
});


/*
// con solo esta línea de código se abre el elemento y no se cerrarría al abrir el resto
$('.accordion').on('click','h2',function(){
	$(this).next().slideToggle(); 
})
*/