var chosen = [];
var ch = 0;

$(document).ready(function(){

    $("#d0").text("0");
    $(".d1").text("1");
	$(".d2").text("2");
	$(".d3").text("3");

    $(".demux-left").text("1");

    $("#d0").on("click", function(){
		$(this).css("background-color", "red");
		chosen[ch] = $(this).text();
		ch++; 
	});
});