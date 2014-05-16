$(function(){
	$("#home a:contains('Home')").parent().addClass("active");
	$("#Contact a:contains('Contact me')").parent().addClass("active");
	$("#Hobbies a:contains('Hobbies')").parent().addClass("active");
	
	
	$("ul.nav li.dropdown").hover(function(){$("ul.dropdown-menu",this).fadeIn()},function(){$("ul.dropdown-menu",this).fadeOut("fast")})
			});