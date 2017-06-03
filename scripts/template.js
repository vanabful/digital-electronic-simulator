/* globalna fja za stvaranje sadržaja opisa */
function createStartTemplate(){
		$(".blokovi").empty();
		
		$(".blokovi").append('<div class="tekst"><label>Choose na option</label></div><div class="demux-slika"><div class="izbor1">Demultiplekseri</div></div><div class="tekst"><label>Then drag and drop</label></div><div class="dragDrop"><img src="images/choose.png"/></div>');
	}

$(document).ready(function(){

	$(".mux-variables").hide();
	
	$("body").css("overflow", "hidden");
	
	$(".edit-icons").hide();
	$(".fa-angle-double-right").hide();
	$(".fa-chevron-up").hide();
	$(".x3-hide").hide();
	$(".x4-hide").hide();

	createStartTemplate();
	
	var NIcounter = 0; /* brojač za dodavanje id-ova dinamičkih stvorenih NI vrata*/
	var NILIcounter = 0; /* brojač za dodavanje id-ova dinamičkih stvorenih NILI vrata*/
	var MUXcounter = 0; /* brojač za dodavanje id-ova dinamičkih stvorenih MUX-a*/
	var DEMUXcounter = 0; /* brojač za dodavanje id-ova dinamičkih stvorenih DEMUX-a*/
	
	$(".draggable").draggable({ /* pomicanjem svakog elementa povnovno se i linije crtaju */
		drag: function(){
			jqSimpleConnect.repaintAll();
		}
	});
	/* biranje ni vrata u izborniku */
	$(".izbori").on("click", ".ni", function(){ 
		$(".izbor").removeClass("selected");
		$(this).addClass("selected");
		$(".blokovi").empty();
		
		createAndInsertNAND(); /* funkcija za dodavnje NILI vrata */
		
		$(".blokovi").css("overflow-y", "scroll");
		
		$(".draggable").draggable({
				containment: "document",
				helper: "clone",
				stop: function(event, ui){ /* dodavnje klona tamo gdje se dragga element */
					var offsetX = ui.helper.offset().left;
					var offsetY = ui.helper.offset().top;
					
					if($(".variabla").hide())
						$(".variabla").show();
					if($(".fa-chevron-down").hide())
						$(".fa-chevron-down").show();

					if($(".mux-variables").show())
						$(".mux-variables").hide();

					$("#drop-zone").append($(this).clone().css({
						"position" : "absolute",
						"left" : offsetX,
						"top" : offsetY
					}).attr("id", "ni-" + NIcounter)); /* dodavnje jedinstvenog id-a */
					NIcounter++;
					
					$(".draggable").draggable({ /* mogucnost micanja klona */
						drag: function(){
							jqSimpleConnect.repaintAll();
						}
					});	
					$("#drop-zone > .block > .delete-button").show(); /* prikaz delete botuna */
				}
			});
		$("#drop-zone").droppable(); /* oznaka mjesta gdje se mogu dropat elementi */
	});
	
	/* biranje nili vrata u izborniku */
	$(".izbori").on("click", ".nili", function(){
		$(".izbor").removeClass("selected");
		$(this).addClass("selected");
		$(".blokovi").empty();
		
		createAndInsertNOR();
		
		$(".blokovi").css("overflow-y", "scroll");
		
		$(".draggable").draggable({
				containment: "document",
				helper: "clone",
				stop: function(event, ui){
					var offsetX = ui.helper.offset().left;
					var offsetY = ui.helper.offset().top;
					
					if($(".variabla").hide())
						$(".variabla").show();
					if($(".fa-chevron-down").hide())
						$(".fa-chevron-down").show();

					if($(".mux-variables").show())
						$(".mux-variables").hide();

					$("#drop-zone").append($(this).clone().css({
						"position" : "absolute",
						"left" : offsetX,
						"top" : offsetY
					}).attr("id", "nili-" + NILIcounter));
					NILIcounter++;
					$(".draggable").draggable({
						drag: function(){
							jqSimpleConnect.repaintAll();
						}
					});	
					$("#drop-zone > .block > .delete-button").show();
				}
			});
		$("#drop-zone").droppable();
	});
	
	/* biranje multipleksera u izborniku */
	$(".izbori").on("click", ".mux", function(){
		$(".izbor").removeClass("selected");
		$(".blokovi").empty();
		
		if($(this).data("clicked"))
			{
				$(this).data("clicked", false);
				$(".blokovi").css("overflow", "none");
				$(this).removeClass("selected");
				createStartTemplate();
			}

		else
			{
				$(this).data("clicked", true);
				$(this).addClass("selected");
				$(".blokovi").css("overflow-y", "scroll");
				createAndInsertMUX();
			}
		
		$(".draggable").draggable({
				containment: "document",
				helper: "clone",
				stop: function(event, ui){
					var offsetX = ui.helper.offset().left;
					var offsetY = ui.helper.offset().top;
					
					/* micanje varijabli sa strane */ 
					if($(".variabla").show())
						$(".variabla").hide();
					if($(".fa-chevron-down").show())
						$(".fa-chevron-down").hide();
					if($(".fa-chevron-up").show())
						$(".fa-chevron-up").hide();

					/* pojava donjih varijabli */ 
					if($(".mux-variables").hide())
						$(".mux-variables").show();

					$("#drop-zone").append($(this).clone().css({
						"position" : "absolute",
						"left" : offsetX,
						"top" : offsetY
					}).attr("id", "mux-" + MUXcounter));
					MUXcounter++;
					$(".draggable").draggable({
						drag: function(){
							jqSimpleConnect.repaintAll();
						}
					});	
					$("#drop-zone > .block > .delete-button").show();
				}
			});
		$("#drop-zone").droppable();
	});
	
	/* biranje demultipleksera u izborniku */
	$(".izbori").on("click", ".demux", function(){
		$(".izbor").removeClass("selected");
		$(".blokovi").empty();
		
		if($(this).data("clicked"))
			{
				$(this).data("clicked", false);
				$(".blokovi").css("overflow", "none");
				$(this).removeClass("selected");
				createStartTemplate();
			}

		else
			{
				$(this).data("clicked", true);
				$(this).addClass("selected");
				$(".blokovi").css("overflow-y", "scroll");
				createAndInsertDEMUX();
			}
		
		$(".draggable").draggable({
				containment: "document",
				helper: "clone",
				stop: function(event, ui){
					var offsetX = ui.helper.offset().left;
					var offsetY = ui.helper.offset().top;
					
					if($(".variabla").show())
						$(".variabla").hide();
					if($(".fa-chevron-down").show())
						$(".fa-chevron-down").hide();
					if($(".fa-chevron-up").show())
						$(".fa-chevron-up").hide();

					if($(".mux-variables").hide())
						$(".mux-variables").show();

					$("#drop-zone").append($(this).clone().css({
						"position" : "absolute",
						"left" : offsetX,
						"top" : offsetY
					}).attr("id", "demux-" + DEMUXcounter));
					DEMUXcounter++;
					$(".draggable").draggable({
						drag: function(){
							jqSimpleConnect.repaintAll();
						}
					});	
					$("#drop-zone > .block > .delete-button").show();
				}
			});
		$("#drop-zone").droppable();
	});
	
	/* biranje dodatnih sklopova (pojačala, invertor) i konstanti (1,0)*/
	$(".izbori").on("click", ".extra-sklopovi, .konst", function(){
		$(".izbor").removeClass("selected");
		$(".blokovi").empty();
		
		if($(this).hasClass("extra-sklopovi")){
			if($(this).data("clicked"))
			{
				$(this).data("clicked", false);
				$(".blokovi").css("overflow", "none");
				$(this).removeClass("selected");
				createStartTemplate();
			}

			else
			{
				$(this).data("clicked", true);
				$(this).addClass("selected");
				createAndInsertSKLOPOVI();
			}
		}

		else{
			if($(this).data("clicked"))
			{
				$(this).data("clicked", false);
				$(".blokovi").css("overflow", "none");
				$(this).removeClass("selected");
				createStartTemplate();
			}

			else
			{
				$(this).data("clicked", true);
				$(this).addClass("selected");
				createAndInsertCONST();
			}
		}
		
		$(".blokovi").css("overflow-y", "scroll");
		
		$(".draggable").draggable({
				containment: "document",
				helper: "clone",
				stop: function(event, ui){
					var offsetX = ui.helper.offset().left;
					var offsetY = ui.helper.offset().top;

					$("#drop-zone").append($(this).clone().css({
						"position" : "absolute",
						"left" : offsetX,
						"top" : offsetY
					}));
					$(".draggable").draggable({
						drag: function(){
							jqSimpleConnect.repaintAll();
						}
					});	
					$("#drop-zone > .block > .delete-button").show();
				}
			});
		$("#drop-zone").droppable();
	});
	
	/* biranje dodatnih varijabli (x1, x2, x3, x4) u izborniku */
	$(".izbori").on("click", ".extra-v1, .extra-v2, .extra-v3, .extra-v4", function(){
		$(".izbor").removeClass("selected");
		$(this).addClass("selected");
		$(".blokovi").empty();
		
		if($(this).hasClass("extra-v1"))
			createAndInsertVAR1();
		else if($(this).hasClass("extra-v2"))
			createAndInsertVAR2();
		else if($(this).hasClass("extra-v3"))
			createAndInsertVAR3();
		else
			createAndInsertVAR4();
		
		$(".blokovi").css("overflow-y", "scroll");
		
		$(".draggable").draggable({
				containment: "document",
				helper: "clone",
				stop: function(event, ui){
					var offsetX = ui.helper.offset().left;
					var offsetY = ui.helper.offset().top;

					$("#drop-zone").append($(this).clone().css({
						"position" : "absolute",
						"left" : offsetX,
						"top" : offsetY
					}));
					$(".draggable").draggable({
						drag: function(){
							jqSimpleConnect.repaintAll();
						}
					});	
					$("#drop-zone > .block > .delete-button").show();
				}
			});
		$("#drop-zone").droppable();
	});
	
	
	function createAndInsertNAND(){
	
	$(".blokovi").append('<div class="block draggable yes-drop ni-2"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints"><div class="endpoint connect1 top must-connect"></div><div class="endpoint connect1 bottom must-connect"></div></div><div class="endpoint right connect1 nand-2 must-connect"></div></div>')
				 .append('<div class="block draggable yes-drop ni-3"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand3"><div class="endpoint connect1 ni3-top must-connect"></div><div class="endpoint ni3-middle connect1 must-connect"></div><div class="endpoint connect1 ni3-bottom must-connect"></div></div><div class="endpoint connect1 right nand-3 must-connect"></div></div>')
				 .append('<div class="block draggable yes-drop ni-4"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand4"><div class="endpoint connect1 ni4-top must-connect"></div><div class="endpoint ni4-middle connect1 must-connect"></div><div class="endpoint ni4-middle connect1 must-connect"></div><div class="endpoint connect1 ni4-bottom must-connect"></div></div><div class="endpoint connect1 right nand-4 must-connect"></div></div>')
				 .append('<div class="block draggable yes-drop ni-5"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand5"><div class="endpoint connect1 ni5-top must-connect"></div><div class="endpoint ni5-middle connect1 must-connect"></div><div class="endpoint ni5-middle connect1 must-connect"></div><div class="endpoint ni5-middle connect1 must-connect"></div><div class="endpoint connect1 ni5-bottom must-connect"></div></div><div class="endpoint connect1 right nand-5 must-connect"></div></div>')
				 .append('<div class="block draggable yes-drop ni-6"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand6"><div class="endpoint connect1 ni6-top must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint connect1 ni6-bottom must-connect"></div></div><div class="endpoint connect1 right nand-6 must-connect"></div></div>');
  }
  
  function createAndInsertNOR(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop nor"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints"><div class="endpoint connect1 top must-connect"></div><div class="endpoint connect1 bottom must-connect"></div></div><div class="endpoint right connect1 nor2 must-connect"></div></div>')
				   .append('<div class="block draggable yes-drop nor-3"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand3"><div class="endpoint connect1 ni3-top must-connect"></div><div class="endpoint ni3-middle connect1 must-connect"></div><div class="endpoint connect1 ni3-bottom must-connect"></div></div><div class="endpoint connect1 right nor3 must-connect"></div></div>')
				   .append('<div class="block draggable yes-drop nor-4"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand4"><div class="endpoint connect1 ni4-top must-connect"></div><div class="endpoint ni4-middle connect1 must-connect"></div><div class="endpoint ni4-middle connect1 must-connect"></div><div class="endpoint connect1 ni4-bottom must-connect"></div></div><div class="endpoint connect1 right nor4 must-connect"></div></div>')
				   .append('<div class="block draggable yes-drop nor-5"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand5"><div class="endpoint connect1 ni5-top must-connect"></div><div class="endpoint ni5-middle connect1 must-connect"></div><div class="endpoint ni5-middle connect1 must-connect"></div><div class="endpoint ni5-middle connect1 must-connect"></div><div class="endpoint connect1 ni5-bottom must-connect"></div></div><div class="endpoint connect1 right nor5 must-connect"></div></div>')
				   .append('<div class="block draggable yes-drop nor-6"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="left-endpoints nand6"><div class="endpoint connect1 ni6-top must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint ni6-middle connect1 must-connect"></div><div class="endpoint connect1 ni6-bottom must-connect"></div></div><div class="endpoint connect1 right nor6 must-connect"></div></div>');
  }
  
  function createAndInsertMUX(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop multiplekser"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="mux-output-input"><div class="left-endpoints"><div class="endpoint connect1 mux-top mux-0 must-connect"></div><div class="endpoint connect1 mux-bottom mux-1 must-connect"></div></div><div class="endpoint connect1 mux-right must-connect"></div></div><div class="bottom-endpoints"><div class="endpoint connect1 first must-connect"></div></div></div>')
				   .append('<div class="block draggable yes-drop multiplekser-2"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="mux-output-input"><div class="left-endpoints"><div class="endpoint connect1 mux2-top mux-0 must-connect"></div><div class="endpoint connect1 mux2-middle mux-1 must-connect"></div><div class="endpoint connect1 mux2-middle mux-2 must-connect"></div><div class="endpoint connect1 mux2-bottom mux-3 must-connect"></div></div><div class="endpoint connect1 mux-right must-connect"></div></div><div class="bottom-endpoints"><div class="endpoint connect1 mux2-first must-connect"></div><div class="endpoint connect1 mux2-second must-connect"></div></div>')
				   .append('<div class="block draggable yes-drop multiplekser-3"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="mux-output-input"><div class="left-endpoints"><div class="endpoint connect1 mux3-top mux-0 must-connect"></div><div class="endpoint connect1 mux3-middle mux-1 must-connect"></div><div class="endpoint connect1 mux3-middle mux-2 must-connect"></div><div class="endpoint connect1 mux3-middle mux-3 must-connect"></div><div class="endpoint connect1 mux3-middle mux-4 must-connect"></div><div class="endpoint connect1 mux3-middle mux-5 must-connect"></div><div class="endpoint connect1 mux3-middle mux-6 must-connect"></div><div class="endpoint connect1 mux3-bottom mux-7 must-connect"></div></div><div class="endpoint connect1 mux3-right must-connect"></div></div><div class="bottom-endpoints"><div class="endpoint connect1 mux3-first must-connect"></div><div class="endpoint connect1 mux3-second must-connect"></div><div class="endpoint connect1 mux3-third"></div></div>');
  }
  
  function createAndInsertDEMUX(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop demultiplekser"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="demux-output-input"><div class="right-endpoints"><div class="demux-endpoint connect1 demux-top d0"></div><div class="demux-endpoint connect1 demux-bottom d1"></div></div></div><div class="bottom-endpoints"><div class="endpoint connect1 demux-first must-connect"></div><div class="endpoint connect1 demux-one-output must-connect"></div></div>')
				   .append('<div class="block draggable yes-drop demultiplekser-2"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="demux-output-input"><div class="right-endpoints"><div class="demux-endpoint d0 demux2-top"></div><div class="demux-endpoint d1 demux2-middle"></div><div class="d2 demux-endpoint demux2-middle"></div><div class="d3 demux-endpoint demux2-bottom"></div></div></div><div class="bottom-endpoints"><div class="endpoint connect1 demux2-first must-connect"></div><div class="endpoint connect1 demux2-second must-connect"></div><div class="endpoint connect1 demux-two-output must-connect"></div></div></div>')
				   .append('<div class="block draggable yes-drop demultiplekser-3"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="demux-output-input"><div class="right-endpoints"><div class="demux-endpoint connect1 demux3-top d0"></div><div class="demux-endpoint connect1 demux3-middle d1"></div><div class="demux-endpoint connect1 demux3-middle middle-2 d2"></div><div class="demux-endpoint connect1 demux3-middle d3"></div><div class="demux-endpoint connect1 demux3-middle middle-4 d4"></div><div class="demux-endpoint connect1 demux3-middle middle-5 d5"></div><div class="demux-endpoint connect1 demux3-middle middle-6 d6"></div><div class="demux-endpoint connect1 demux3-bottom d7"></div></div></div><div class="bottom-endpoints"><div class="endpoint connect1 demux3-first must-connect"></div><div class="endpoint connect1 demux3-second must-connect"></div><div class="endpoint connect1 demux3-third must-connect"></div><div class="endpoint connect1 demux-three-output must-connect"></div></div></div>');
  }
  
  function createAndInsertSKLOPOVI(){
	  
	  $(".blokovi").append('<div class="block draggable invertor yes-drop"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="endpoint extra-left-endpoint"></div><div class="endpoint extra-right-endpoint"></div></div>')
				   .append('<div class="block draggable pojacalo yes-drop"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="endpoint extra-left-endpoint"></div><div class="endpoint extraPojacalo-right-endpoint"></div></div>');
  }
  
  function createAndInsertVAR1(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x1"><div class="points"><div class="point connect1 pozitivan"></div><div class="point connect1 pozitivan"></div></div><div class="kutija"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x1"><div class="points"><div class="point negiran connect1"></div><div class="point negiran connect1"></div></div><div class="kutija x1-neg"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x1"><div class="points points-up"><div class="point connect1 point-up pozitivan"></div></div><div class="kutija"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x1"><div class="points points-up"><div class="point point-up negiran connect1"></div></div><div class="kutija x1-neg"></div></div></div>');
  }
  
  function createAndInsertVAR2(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x2"><div class="points"><div class="point connect1 pozitivan"></div><div class="point connect1 pozitivan"></div></div><div class="kutija x2-poz"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x2"><div class="points"><div class="point negiran connect1"></div><div class="point negiran connect1"></div></div><div class="kutija x2-neg"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x2"><div class="points points-up"><div class="point connect1 pozitivan point-up"></div></div><div class="kutija x2-poz"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x2"><div class="points points-up"><div class="point negiran connect1 point-up"></div></div><div class="kutija x2-neg"></div></div></div>');
  }
  
  function createAndInsertVAR3(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x3"><div class="points"><div class="point connect1 pozitivan"></div><div class="point connect1 pozitivan"></div></div><div class="kutija x3-poz"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x3"><div class="points"><div class="point negiran connect1"></div><div class="point negiran connect1"></div></div><div class="kutija x3-neg"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x3"><div class="points points-up"><div class="point connect1 pozitivan point-up"></div></div><div class="kutija x3-poz"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x3"><div class="points points-up"><div class="point negiran connect1 point-up"></div></div><div class="kutija x3-neg"></div></div></div>');
  }
  
  function createAndInsertVAR4(){
	  
	  $(".blokovi").append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x4"><div class="points"><div class="point connect1 pozitivan"></div><div class="point connect1 pozitivan"></div></div><div class="kutija x4-poz"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box x4"><div class="points"><div class="point negiran connect1"></div><div class="point negiran connect1"></div></div><div class="kutija x4-neg"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x4"><div class="points points-up"><div class="point connect1 pozitivan point-up"></div></div><div class="kutija x4-poz"></div></div></div>')
				   .append('<div class="block draggable yes-drop extra-variabla"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box box-up x4"><div class="points points-up"><div class="point negiran connect1 point-up"></div></div><div class="kutija x4-neg"></div></div></div>');
  }
  
  function createAndInsertCONST(){
	  
	  $(".blokovi").append('<div class="block draggable const"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box const-1"><div class="point connect1 const-connect must-connect"></div><div class="kutija vcc"></div></div></div>')
				   .append('<div class="block draggable const"><i class="fa fa-times delete-button" aria-hidden="true"></i><div class="box const-0"><div class="point connect1 const-connect must-connect"></div><div class="kutija gnd"></div></div></div>');
  }
  
  /* klik na brisanje dinamicki dodanog elementa */
  $("#drop-zone").on("click", ".delete-button", function(){
	 const parent = $(this).parent();
	 var count = 0;
	 /* ukoliko je element multiplkser */
	 if($(parent).is(".multiplekser, .multiplekser-2, .multiplekser-3")){
		 $(parent).remove(); /* birsanje elementa */
		 /* traženje svih konekcija koje taj element ima i njihovo brisanje */
		 for(var i=0; i<data.length; i++){
			 jqSimpleConnect.removeConnection(data[i].connectionName);
		 }
		 data = []; /* praznjenje niza u kojem su se nalazile informacije o konekcijama */
	 }
	 /* ukoliko je element ni/nili vrata */
	 else{
		 $(parent).remove();
		 
		 for(var i=0; i< data.length; i++){
			 /* ukoliko je konekcija vezana uz ta ni/nili vrata, izbrisi je */
			 if((parent[0] == data[i].niNiliSourceParent) || (parent[0] == data[i].targetParent)){
				 jqSimpleConnect.removeConnection(data[i].connectionName);
				 data.splice(i,1); /* makni informacije o toj konekciji iz niza data */
				 i--; 
			 }
			 count = i;
		 }
		 i = count+1;
	 }
	 /* makni crvena svitla, vrati sve na originalne postavke */
	 $(".exit-sign").find("i").css("color", "#4e4e4e");
	 $(".variable-sign").show().text(" ");
	 $(".variable-sign").css("border-bottom-color", "#999");
	 
  });
  
  
  $("#side-content").on("click", ".show-icon", function(){
	  
	 
	 if($("#side-content").hasClass("side-show")){
		$(".fa-angle-double-left").show();
		$(".fa-angle-double-right").hide();
		$(".edit-icons").fadeOut().hide();
		$("#side-content").removeClass("side-show");
	 }
	 
	 else{
		$(".fa-angle-double-left").hide();
		$(".fa-angle-double-right").show();
		$(".edit-icons").fadeIn().show();
		$("#side-content").addClass("side-show");
	 }
	 
  });
  
  $("#variable-box").on("click", ".fa-chevron-down", function(){
	 if($(".x3-hide").hide())
		 $(".x3-hide").fadeIn().show();
	  if($(".x4-hide").hide())
		 $(".x4-hide").fadeIn().show();
	 $(".fa-chevron-up").fadeIn().show();
	 $(".fa-chevron-down").fadeOut().hide();
	 jqSimpleConnect.repaintAll();
	 
  });
  
  $("#variable-box").on("click", ".fa-chevron-up", function(){
	 if($(".x3-hide").show())
		 $(".x3-hide").fadeOut().hide();
	  if($(".x4-hide").show())
		 $(".x4-hide").fadeOut().hide();
	 $(".fa-chevron-down").fadeIn().show();
	 $(".fa-chevron-up").fadeOut().hide();
	 jqSimpleConnect.repaintAll();
	 
  });
	
	
});