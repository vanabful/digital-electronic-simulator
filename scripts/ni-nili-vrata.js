var niVariable = [];
var niliVariable = [];
var niData = [];
var niliData = [];

/* fja za funkcionalnost NI vrata*/
function NI (inputValues){
	
	var output = 1;
	
	for(var i=0; i<inputValues.length; i++)
	{
		inputValues[i] = parseInt(inputValues[i], 2);
	}
	for(var j=0; j<inputValues.length; j++)
		output = output & inputValues[j];
	
	if(output == 1)
		return 0;
	else
		return 1;
}

/* funkcija za invertor */
function Inverter(value){
	parseInt(value,2);

	if(value == 1)
		return 0;
	else
		return 1;
} 

/* funkcija za NI vrata s 2 ulaza za mux*/
function NAND (input, selectA, selectB){


	parseInt(input,2);
	parseInt(selectA,2);
	parseInt(selectB,2);

	var output = input & selectA & selectB;

	if(output == 1)
		return 0;
	else
		return 1;

} 
/* funkcija za NI vrata s 1 ulazom za mux*/
function NAND1 (input, selectA){


	parseInt(input,2);
	parseInt(selectA,2);

	var output = input & selectA;

	var output1 = Inverter(output);

	return output1;

} 

/* funkcija za ILI */
function OR (inputValues){

	var output = 0;

	for(var i=0; i<inputValues.length; i++){
		parseInt(inputValues[i],2);
	}

	for(var j=0; j<inputValues.length; j++){
		output = output | inputValues[j];
	}
	return output;
}

/* funkcija za AND vrata */
function AND (input1, input2, input3, input4){

	parseInt(input1, 2);
	parseInt(input2, 2);
	parseInt(input3, 2);
	parseInt(input4, 2);

	var output = input1 & input2 & input3 & input4;

	return output;
}

/* funkcija za AND za 2 vrata */
function AND2 (input1, input2){

	parseInt(input1, 2);
	parseInt(input2, 2);

	var output = input1 & input2;

	return output;
}

/* funkcija za AND za 2 vrata */
function AND3 (input1, input2, input3){

	parseInt(input1, 2);
	parseInt(input2, 2);
	parseInt(input3, 2);

	var output = input1 & input2 & input3;

	return output;
}

/* fja za funkcionalnost NILI vrata*/
function NILI (inputValues){
	
	var output = 0;
	
	for(var i=0; i<inputValues.length; i++)
	{
		inputValues[i] = parseInt(inputValues[i], 2);
	}
	for(var j=0; j<inputValues.length; j++)
		output = output | inputValues[j];
	
	if(output == 1)
		return 0;
	else
		return 1;
}

/* prebacivanje vrijednosti s varijabli(kucica) na elemente // s jedne na drugu stranu konekcije //*/
function transferValues(){
	for(var i=0; i<data.length; i++)
	{
		if($(data[i].variableSourceParent).is('.x1, .x2, .x3, .x4'))
		{
			$(data[i].targetPoint).text($(data[i].sourcePoint).text());
		}
		
		if($(data[i].niNiliSourceParent).hasClass("const-1")){
			$(data[i].sourcePoint).text("1");
			$(data[i].targetPoint).text($(data[i].sourcePoint).text());
		}
		else if($(data[i].niNiliSourceParent).hasClass("const-0")){
			$(data[i].sourcePoint).text("0");
			$(data[i].targetPoint).text($(data[i].sourcePoint).text());
		}
		
	}
}

/* izracunavanje ukupnih izlaza */
function chooseAndCalculateGate(){
	var p=0;
	var t=0;
	for(var i=0; i<data.length; i++)
	{
		/* ukoliko se radi o NI vratima */
		if($(data[i].targetParent).is('.ni-2, .ni-3, .ni-4, .ni-5, .ni-6')){
			niData[t] = {};  /* spremanje ulaza u ni vrata koji su targeti (drugi kraj konekcije)*/
			niData[t].target = data[i].targetPoint;
			niData[t].parent = data[i].targetParent;
			niData[t].text = $(data[i].targetPoint).text();
			t++;
		}
		/* ukoliko se radi o NILI vratima */
		else if($(data[i].targetParent).is('.nor, .nor-3, .nor-4, .nor-5, .nor-6')){
			niliData[p] = {}; /* spremanje ulaza u nili vrata koji su targeti (drugi kraj konekcije)*/
			niliData[p].target = data[i].targetPoint;
			niliData[p].parent = data[i].targetParent;
			niliData[p].text = $(data[i].targetPoint).text();
			p++;
		}
		/* ukoliko se radi o izlazu */
		else if($(data[i].targetPoint).hasClass("exit")){
			exit = {};
			exit.target = data[i].targetPoint;
			exit.sourceParent = data[i].niNiliSourceParent;
			exit.source = data[i].sourcePoint;
		}
		
	}
	
	/* ovo izvodi sve dok se ne isprazni niData i niliData */
	do{
		
		for(var i=0; i<niData.length-1; i++){
			k=0;
			for(var j=1; j<niData.length; j++){
				/* trazenje ulaza koji su dica istog roditelja i spremanje njihovih vrijednosti u poseban niVariable niz te brisanje iz niData */
				if((niData[i].parent == niData[j].parent) && i!=j){
					niVariable[k] = niData[j].text;
					niData.splice(j,1);
					j--;
					k++;
				}
			}
			niVariable[k] = niData[i].text; /* spremanje elementa s kojim smo usporedivali roditelja */
			$($(niData[i].parent).find(".right")).text(NI(niVariable));/* racunanje izlaza iz tog roditelja */
			
			/* ukoliko smo dosli do kraja */
			if(niData[i].parent == exit.sourceParent){
				$(exit.target).text($($(niData[i].parent).find(".right")).text()); /* rezultat prebaci s jednog na drugi kraj konekcije */
				niData.splice(i,1); /* izbrisi ga iz niData */
				break; /* prekini izvodenje */
			}
			
			for(var l=0; l<data.length; l++)
			{
				/* ukoliko je neki izlaz iz roditelja ujedno i pocetak nove konekcije */
				if(niData[i].parent == data[l].niNiliSourceParent)
						/* ako se radi o NI vratima */
						if($(data[l].targetParent).is('.ni-2, .ni-3, .ni-4, .ni-5, .ni-6')){
							/* prebacivanje vrijednosti s pocetka konekcije (izlaz nekog elementa) na kraj konekcije (ulaz novog elementa)*/
							for(var s=0; s < niData.length; s++){
								if(niData[s].target == data[l].targetPoint){
									$(niData[s].target).text($($(niData[i].parent).find(".right")).text());
									niData[s].text = $($(niData[i].parent).find(".right")).text();
								}
							}
						}
						/* ako se radi o NILI vratima */
						else if($(data[l].targetParent).is('.nor, .nor-3, .nor-4, .nor-5, .nor-6')){
							/* prebacivanje vrijednosti s pocetka konekcije (izlaz nekog elementa) na kraj konekcije (ulaz novog elementa)*/
							for(var s=0; s < niliData.length; s++){
								if(niliData[s].target == data[l].targetPoint){
									$(niliData[s].target).text($($(niData[i].parent).find(".right")).text());
									niliData[s].text = $($(niData[i].parent).find(".right")).text();
								}
							}
						}
			}
			niVariable = []; /* praznjenje niza*/
			niData.splice(i,1); /* brisanje pocetnog (obradenog) elementa */
			i--;
			break; /* prebacivanje na NILI vrata, zavrsetak prvog reda */
		}
		
		for(var i=0; i<niliData.length-1; i++){
			k=0;
			for(var j=1; j<niliData.length; j++){
				/* trazenje ulaza koji su dica istog roditelja i spremanje njihovih vrijednosti u poseban niVariable niz te brisanje iz niliData */
				if(niliData[i].parent == niliData[j].parent && i!=j){
					niliVariable[k] = niliData[j].text;
					niliData.splice(j,1);
					j--;
					k++;
				}
			}
			niliVariable[k] = niliData[i].text;
			$($(niliData[i].parent).find(".right")).text(NILI(niliVariable));
			
			if(niliData[i].parent == exit.sourceParent)
				$(exit.target).text($($(niliData[i].parent).find(".right")).text());
			
			for(var l=0; l<data.length; l++)
			{
				if(niliData[i].parent == data[l].niNiliSourceParent){
					
						if($(data[l].targetParent).is('.ni-2, .ni-3, .ni-4, .ni-5, .ni-6')){
							for(var s=0; s < niData.length; s++){
								if(niData[s].target == data[l].targetPoint){
									$(niData[s].target).text($($(niliData[i].parent).find(".right")).text());
									niData[s].text = $($(niliData[i].parent).find(".right")).text();
								}
							}
						}
						else if($(data[l].targetParent).is('.nor, .nor-3, .nor-4, .nor-5, .nor-6')){
							for(var s=0; s < niliData.length; s++){
								if(niliData[s].target == data[l].targetPoint){
									$(niliData[s].target).text($($(niliData[i].parent).find(".right")).text());
									niliData[s].text = $($(niliData[i].parent).find(".right")).text();
								}
							}
						}
				}
	
			}
			niliVariable = [];
			niliData.splice(i,1);
			i--;
			break;
		}
	}while(niData.length > 0 || niliData.length > 0);
	
}

/* postavljanje crvenog svitla ako je neki izlaz jednak 1 */
function setIndicators(){
	if(exit.target.id == "y1"){
		if($(exit.target).text() == "1")
			$("#y1-ind").find("i").css("color","#ffcc33");
		else
			$("#y1-ind").find("i").css("color","#4e4e4e");
	}

	else if(exit.target.id == "y2"){
		if($(exit.target).text() == "1")
			$("#y2-ind").find("i").css("color","#ffcc33");
		else
			$("#y2-ind").find("i").css("color","#4e4e4e");
	}
		
	else if(exit.target.id == "y3"){
		if($(exit.target).text() == "1")
			$("#y3-ind").find("i").css("color","#ffcc33");
		else
			$("#y3-ind").find("i").css("color","#4e4e4e");
	}
		
	else if(exit.target.id == "y4"){
		if($(exit.target).text() == "1")
			$("#y4-ind").find("i").css("color","#ffcc33");
		else
			$("#y4-ind").find("i").css("color","#4e4e4e");
	}
	
}

$(document).ready(function(){
	
	/* klik na botun generiraj */
	$("#bottom-container").on("click", "#generate", function(){
		
		/* svaki put kad se generira novi broj, sve se vraca na pocetak */
		var niVariable = [];
		var niliVariable = [];
		var niData = [];
		var niliData = [];
		var Connected = 0;
		var muxVariables = [];
		var muxAddress = [];
		var demuxVariables = [];
		var demuxAddress = [];
		var d=0;
		var e=0;
		
		/* ukoliko nijedna varijabla nije spojena - prekid! */
		if(!($(".x1").hasClass("used")) && !($(".x2").hasClass("used")) && !($(".x3").hasClass("used")) && !($(".x4").hasClass("used"))){
			alert("Not connected!");
			return;
		}
		/* brojanje ima li svaki element povezan svaki ulaz i izlaz */
		var connections = $("#drop-zone").find(".must-connect");
		for(var l=0; l<connections.length; l++){
				for(var s=0; s<data.length; s++){
					if(connections[l] == data[s].sourcePoint || connections[l] == data[s].targetPoint){
						Connected++;
						break;
					}
					else{
						continue;
					}
				}
		}
		/* ukoliko nema, prekid! */
		if(Connected != connections.length){
			alert("Nije sve spojeno!");
			return;
		}
		
		/* ukoliko se radi o multiplekseru */
		if($("#drop-zone").find(".multiplekser").length || $("#drop-zone").find(".multiplekser-2").length || $("#drop-zone").find(".multiplekser-3").length){
			
			if($("#drop-zone").find(".multiplekser").length){
				if($(".x1").hasClass("used")){
					$("#x4-num").hide();
					$("#x3-num").hide();
					$("#x2-num").hide();
					if($("#x1-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(1);
				}
				
				else if($(".x2").hasClass("used")){
					$("#x3-num").hide();
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(2);
				}
				else{
					alert("Nije podržan multiplekser za n > m+1!");
					return;
				}
			}
			
			else if($("#drop-zone").find(".multiplekser-2").length){
				if($(".x4").hasClass("used")){
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == "" && $("#x4-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(4);
				}
				
				else if($(".x3").hasClass("used") && $(".x2").hasClass("used")){
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(3);
				}
				
				else if($(".x2").hasClass("used")){
					$("#x4-num").hide();
					$("#x3-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(2);
				}
				
				else{
					alert("Nije podržan multiplekser za n > m+1!");
					return;
				}
			}
			
			else if($("#drop-zone").find(".multiplekser-3").length){
				if($(".x4").hasClass("used")){
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == "" && $("#x4-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(4);
				}
				
				else if($(".x4").hasClass("used")){
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(3);
				}
				
				else{
					alert("Nije podržan multiplekser za n > m+1!");
					return;
				}
			}
			/* postavi vrijednosti x i x negirano */
			setValues();
			transferValues();
			for(var p=0; p < data.length; p++){
				/* ako je element izlaz */
				if($(data[p].targetPoint).hasClass("exit")){
					exit = {};
					exit.rightExit = data[p].sourcePoint;
					exit.target = data[p].targetPoint;
				}
				else if($(data[p].targetFirstParent).hasClass("bottom-endpoints")){
					/* ukoliko je a2 */
					if($(data[p].targetPoint).is(".first, .mux2-first, .mux3-first")){
						muxAddress[d] = $(data[p].targetPoint).text();
						d++;
					}
					/* ukoliko je a1 */
					else if($(data[p].targetPoint).is(".mux2-second, .mux3-second")){
						var extraSecond = $(data[p].targetPoint).text();
					}
					/* ukoliko je a0 */
					else{
						var extraThird = $(data[p].targetPoint).text();
					}
					/* ako imamo dva adresna ulaza */
					if(extraSecond){
						muxAddress[d] = extraSecond;
						d++;
					}
					/* ako imamo tri adresna ulaza */
					if(extraThird){
						muxAddress[d] = extraThird;
					}
				}
				else{
					muxVariables[e] = data[p].targetPoint;
					e++;
				}
			}
			/* obavljanje mux funkcionalnosti */
			Multiplekser(muxAddress,exit.rightExit);
			
			/* prosljedivanje vrijednosti izlaza */
			$(exit.target).text($(exit.rightExit).text());
			setIndicators();
			
		}
		/* ako se radi o demuxu */ 
		else if($("#drop-zone").find(".demultiplekser").length || $("#drop-zone").find(".demultiplekser-2").length || $("#drop-zone").find(".demultiplekser-3").length){
			
			if($("#drop-zone").find(".demultiplekser").length){
				if($(".x1").hasClass("used")){
					$("#x4-num").hide();
					$("#x3-num").hide();
					$("#x2-num").hide();
					if($("#x1-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(1);
				}
				
				else if($(".x2").hasClass("used")){
					$("#x3-num").hide();
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(2);
				}
				else{
					alert("Nije podržan multiplekser za n > m+1!");
					return;
				}
			}
			
			else if($("#drop-zone").find(".demultiplekser-2").length){
				if($(".x4").hasClass("used")){
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == "" && $("#x4-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(4);
				}
				
				else if($(".x3").hasClass("used") && $(".x2").hasClass("used")){
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(3);
				}
				
				else if($(".x2").hasClass("used")){
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("x3-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(3);
				}
				
				else{
					alert("Nije podržan multiplekser za n > m+1!");
					return;
				}
			}
			
			else if($("#drop-zone").find(".demultiplekser-3").length){
				if($(".x4").hasClass("used")){
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == "" && $("#x4-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(4);
				}
				
				else if($(".x3").hasClass("used")){
					$("#x4-num").hide();
					if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == ""){
						$(".variable-sign").text("0");
					}
					else
						getValues(3);
				}
				
				else{
					alert("Nije podržan demultiplekser za n > m+1!");
					return;
				}
			}

			/* postavi vrijednosti x i x negirano */
			setValues();
			transferValues();

			for(var p=0; p < data.length; p++){
				/* ako je element izlaz */
				if($(data[p].targetPoint).hasClass("exit")){
					exit = {};
					exit.rightExit = data[p].sourcePoint;
					exit.target = data[p].targetPoint;
				}
				else if($(data[p].targetFirstParent).hasClass("bottom-endpoints")){
					/* ukoliko je a2 */
					if($(data[p].targetPoint).is(".demux2-first, .demux3-first")){
						demuxAddress[d] = $(data[p].targetPoint).text();
						d++;
					}
					/* ukoliko je a1 */
					else if($(data[p].targetPoint).is(".demux2-second, .demux3-second")){
						var extraSecond = $(data[p].targetPoint).text();
					}
					/* ukoliko je a0 */
					else{
						var extraThird = $(data[p].targetPoint).text();
					}
					/* ako imamo dva adresna ulaza */
					if(extraSecond){
						demuxAddress[d] = extraSecond;
						d++;
					}
					/* ako imamo tri adresna ulaza */
					if(extraThird){
						demuxAddress[d] = extraThird;
					}
				}
				else{
					demuxVariables[e] = data[p].targetPoint;
					e++;
				}
			}

			/* obavljanje mux funkcionalnosti */
			Demultiplekser(demuxAddress,chosen,exit.rightExit);
			
			/* prosljedivanje vrijednosti izlaza */
			$(exit.target).text($(exit.rightExit).text());
			setIndicators();

		}
		
		/* ukoliko se radi o NI/NILI vratima */
		else{
			/* koristene sve 4 varijable */
			if($(".x4").hasClass("used"))
			{
				if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == "" && $("#x4-num").text() == "")
					$(".variable-sign").text("0");

				else
					getValues(4);
				
				setValues();
				transferValues();
				chooseAndCalculateGate();
				setIndicators();
			}
			/* koristene 3 varijable */
			else if($(".x3").hasClass("used"))
			{
				$("#x4-num").hide();
				if($("#x1-num").text() == "" && $("#x2-num").text() == "" && $("#x3-num").text() == "")
					$(".variable-sign").text("0");

				else
					getValues(3);
				
				setValues();
				transferValues();
				chooseAndCalculateGate();
				setIndicators();
			}
			/* koristene 2 varijable */
			else if($(".x2").hasClass("used")){
				$("#x4-num").hide();
				$("#x3-num").hide();
				if($("#x1-num").text() == "" && $("#x2-num").text() == ""){
					$(".variable-sign").text("0");
				}

				else
					getValues(2);
				
				setValues();
				transferValues();
				chooseAndCalculateGate();
				setIndicators();
			}
			/* koristena 1 varijabla */
			else{
				$("#x4-num").hide();
				$("#x3-num").hide();
				$("#x2-num").hide();
				if($("#x1-num").text() == "")
					$(".variable-sign").text("0");

				else
					getValues(1);
				setValues();
				transferValues();
				chooseAndCalculateGate();
				setIndicators();
			}
		}
			
	});

});