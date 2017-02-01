//Sobre el elemento con clase accordion, escucha un click en el elemento h2
$('.accordion').on('click','h2',function(){
	var t = $(this);
//busca el siguiente elemento
	var tp = t.next();
//dentro del padre busca un hermano p
	var p = t.parent().siblings().find('.accordion_content');
//oculta el siguiente dentro del padre busca un hermano p (sin esta podría funcionar)
	p.slideUp();
//Muestra u oculta el siguiente elemento	
	tp.slideToggle();

});
$('.accordion').on('click','.accordion_item',function(){
	var t = $(this);
	var tp = t.children('ul');
	var p = t.parent().find('li>ul');
	p.slideUp();
	tp.slideToggle();

});
/*
// con solo esta línea de código se abre el elemento y no se cerrarría al abrir el resto
$('.accordion').on('click','h2',function(){
	$(this).next().slideToggle(); 
})
*/