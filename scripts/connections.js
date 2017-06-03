var data = []; /* globalni niz koji ce sadrzavati objekte u kojima je ime svake konekcije i dodatni podaci o njoj */
var i=0;
var t=0;
var chosen = [];
var ch = 0;

$(document).ready(function(){
	var lastSelection = null; /* prvi element koji je kliknut, od kojeg krece konekcija */ 
	const connections = []; /* sadrzi imena svake konekcije */
	
	/* postavanje da se vrijednost varijabli ne vidi */
	$(".point").css("color", "transparent"); 
	$(".point1").css("color", "transparent");
	$(".top-left-endpoint").css("color", "transparent");
	$(".bottom-left-endpoint").css("color", "transparent");
	$(".right-endpoint").css("color", "transparent");
	$(".exit").css("color", "transparent");

	$("#main-part .d0").text("0");
    $(".d1").text("1");
	$(".d2").text("2");
	$(".d3").text("3");

	$(".demux-left").text("1");

    $("#main-part").on("click", ".d0, .d1, .d2, .d3, .d4, .d5, .d6, .d7" , function(){
		$(this).css("background-color", "red");
		$(this).css("opacity", "0.8");
		if($(this).hasClass("d0"))
		{
			chosen[ch] = "0";
		}
		else if($(this).hasClass("d1")){
			chosen[ch] = "1";
		}
		else if($(this).hasClass("d2")){
			chosen[ch] = "2";
		}
		else if($(this).hasClass("d3")){
			chosen[ch] = "3";
		}
		else if($(this).hasClass("d4")){
			chosen[ch] = "4";
		}
		else if($(this).hasClass("d5")){
			chosen[ch] = "5";
		}
		else if($(this).hasClass("d6")){
			chosen[ch] = "6";
		}
		else{
			chosen[ch] = "7";
		}

		ch++; 
	});
	
	/* klik na element koji ima pravo povezivanja/konekcije s drugim elementom */
	$('#main-part').on("click", ".connect1", function(){
		
		if(lastSelection == null) /* ukoliko smo prvi put klikli neki element, početak konekcije */
		{
			/* ukoliko je prvi element ulaz u ni/nili vrata ili ulaz u mux prekini spajanje */
			if ($(this.parentElement).hasClass("left-endpoints")){
				alert("Greska u povezivanju!");
				return;
			}
			lastSelection = this; 
			$(this).addClass("connect");
			/* dodavanje klase used varijablama da bi znali koje smo koristili */
			if($(this).offsetParent().is('.x1,.x2 ,.x3 ,.x4'))
				$(this).offsetParent().addClass("used");
		}
		
		else
		{
			$(this).addClass("connect");
			
			connections[i] = jqSimpleConnect.connect($(lastSelection), $(this), {radius: 1, color: '#202628', roundedCorners: "true", style: "solid", borderWidth: 1, borderColor: "#202628"});
			$($(this)).text($(lastSelection).text());
			
			data[i] = {};
			data[i].connectionName = connections[i]; /* ime konekcije */
			data[i].sourcePoint = lastSelection; /* element koji je pocetak konekcije */
			data[i].targetPoint = this; /* element koji je kraj konekcije */
			data[i].variableSourceParent = lastSelection.parentElement.parentElement; /* roditelj (glavni element) source variabla elementa*/
			data[i].niNiliSourceParent = lastSelection.parentElement; /* roditelj source ni/nili elementa*/
			data[i].targetParent = this.parentElement.parentElement; /* roditelj target elementa */
			data[i].targetFirstParent = this.parentElement; /* roditelj u slucaju muxa */
			data[i].targetPoints = this.parentElement; /* ne znan jel triba */
			data[i].connections = document.getElementsByClassName(data[i].connectionName);
			
			$(lastSelection).removeClass("connect");
			$(this).removeClass("connect");
			lastSelection = null;
			i++;
		}
		
			
	});
	
	/* ukoliko se resize-a prozor, sve konekcije se ponovno postavljaju */
	$(window).on("resize", function(){
		jqSimpleConnect.repaintAll();
	});
	
	/* klikom na pojedinu konekciju, brise se */
	$("body").on("click", ".jqSimpleConnect", function(){
		if (confirm('Stvarno želite izbrisati ovu konekciju?')) {
			var classes = $(this).attr('class').split(' ')[1]; /* spremanje imena konekcija */
			var count = 0;

			for(var i=0; i<data.length; i++)
			{
				if(data[i].connectionName == classes){
					jqSimpleConnect.removeConnection(data[i].connectionName);
					data.splice(i,1); /* makni informacije o toj konekciji iz niza data */
					connections.splice(i,1);
					i--;
				}
				count=i;
			}
			i=count+1;
		} else {
			return;
		}
	
	});
});