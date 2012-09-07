function setSelected() {
    $('.tabs .selected').removeClass('selected');
    $(this).addClass('selected');
}

$(document).ready(function() {
    $('#products').click(function(){
		window.location = "http://127.0.0.1:8020/Systerbolaget/products.html";
	});
    $('#favourites').click(function(){
		window.location = "./favourites.html";
	});
    $('#news').click(function(){
		window.location = "./news.html";
	});
    $('#about').click(function(){
		window.location = "./about.html";
	});
});