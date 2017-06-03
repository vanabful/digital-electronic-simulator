$(document).ready(function(){
	$(".izbori").on("click", ".izbor", function(){
		
		if($(this).hasClass("log-vrata"))
		{
			if($(this).data("clicked"))
			{
				$(".log").fadeOut().hide();
				$(this).data("clicked", false);
				$(".blokovi").css("overflow", "none");
				createStartTemplate();
			}

			else
			{
				$(".log").fadeIn().show();
				$(this).data("clicked", true);
				$(".izbor").removeClass("selected");
				$(this).addClass("selected");
			}
		}
		
		else if($(this).hasClass("extra-v"))
		{
			if($(this).data("clicked"))
			{
				$(".extra-var").fadeOut().hide();
				$(this).data("clicked", false);
				$(".blokovi").css("overflow", "none");
				createStartTemplate();
			}

			else
			{
				$(".extra-var").fadeIn().show();
				$(this).data("clicked", true);
			}
		}
		
	});

	$(".izbori").on("click", ".izbor-icon", function(){

		if($(this).data("clicked"))
			{
				$(".izbori .izbor").fadeOut().hide();
				$(this).data("clicked", false);
			}

			else
			{
				$(".izbori .izbor").fadeIn().show();
				$(this).data("clicked", true);
				$(".izbor-icon").removeClass("selected");
				$(this).addClass("selected");
			}
	});
	
	/* fja za hooveranje konekcija 
	$( function() {
    $( document ).tooltip({
      position: {
        my: "center top",
        at: "center bottom"
      },
      show: {
        duration: 600
      },
      hide: {
        effect: "hide"
      },
	  track: true
    });
  } );*/
	
	
});