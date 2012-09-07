$(document).ready(function() {
    $('table tr').each(function(index, item) {
        $(item).click(function() {
			window.location = "./details.html";
		})
	});
});