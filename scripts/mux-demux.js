function Multiplekser (muxAddress, rightPoint) {
	
	if(muxAddress.length == "1"){

		var negativeA0 = Inverter(muxAddress[0]);

		var output1 = NAND1 ($("#drop-zone").find(".mux-0").text(), muxAddress[0]);
		var output2 = NAND1 ($("#drop-zone").find(".mux-1").text(), negativeA0);

		$(rightPoint).text(NAND1(output1, output2));
	}
	
	else if(muxAddress.length == "2"){
		// muxAddress[0] == A1, muxAddress[1] == A0
		var negativeA0 = Inverter(muxAddress[1]);
		var negativeA1 = Inverter(muxAddress[0]);

		var output1 = NAND ($("#drop-zone").find(".mux-0").text(), negativeA0, negativeA1);
		var output2 = NAND ($("#drop-zone").find(".mux-1").text(), negativeA1, muxAddress[1]);
		var output3 = NAND ($("#drop-zone").find(".mux-2").text(), negativeA0, muxAddress[0]);
		var output4 = NAND ($("#drop-zone").find(".mux-3").text(), muxAddress[0], muxAddress[1]);

		$(rightPoint).text(NAND(output1, output2, output3, output4));
	}
	
	else{
		var inputValues = [];
		// muxAddress[0]=A2, muxAddress[1] = A1, muxAddress[2] = A0
		var negativeA0 = Inverter(muxAddress[2]);
		var negativeA1 = Inverter(muxAddress[1]);
		var negativeA2 = Inverter(muxAddress[0]);

		inputValues[0] = AND ($("#drop-zone").find(".mux-0").text(), negativeA0, negativeA1, negativeA2);
		inputValues[1] = AND ($("#drop-zone").find(".mux-1").text(), negativeA1, negativeA0, negativeA2);
		inputValues[2] = AND ($("#drop-zone").find(".mux-2").text(), negativeA2, negativeA0, muxAddress[1]);
		inputValues[3] = AND ($("#drop-zone").find(".mux-3").text(), negativeA2, muxAddress[1], muxAddress[2]);
		inputValues[4] = AND ($("#drop-zone").find(".mux-4").text(), muxAddress[0], negativeA1, negativeA0);
		inputValues[5] = AND ($("#drop-zone").find(".mux-5").text(), muxAddress[0], muxAddress[1], negativeA0);
		inputValues[6] = AND ($("#drop-zone").find(".mux-6").text(), muxAddress[0], muxAddress[1], negativeA0);
		inputValues[7] = AND ($("#drop-zone").find(".mux-7").text(), muxAddress[0], muxAddress[1], muxAddress[2]);

		$(rightPoint).text(OR(inputValues));
	}
}

function Demultiplekser(muxAddress, chosenOutputs, rightPoint){
	if(muxAddress.length == "1"){

	}

	else if(muxAddress.length == "2"){
		var inputValues = [];
		var orValues = [];
		k=0;

		// muxAddress[0] == A1, muxAddress[1] == A0
		var negativeA0 = Inverter(muxAddress[1]);
		var negativeA1 = Inverter(muxAddress[0]);

		inputValues[0] = AND2(negativeA0, negativeA1);
		inputValues[1] = AND2(muxAddress[1], negativeA1);
		inputValues[2] = AND2(negativeA0, muxAddress[0]);
		inputValues[3] = AND2(muxAddress[0], muxAddress[1]);

		for(var i=0; i<inputValues.length; i++){
			for(var j=0; j<chosenOutputs.length; j++){
				if(chosenOutputs[j] == i)
				{
					orValues[k] = inputValues[i];
					k++;
				}
			}
		}

		$(rightPoint).text(OR(orValues));
	}

	else{
		var inputValues = [];
		var orValues = [];
		k=0;

		// muxAddress[0]=A2, muxAddress[1] = A1, muxAddress[2] = A0
		var negativeA0 = Inverter(muxAddress[2]);
		var negativeA1 = Inverter(muxAddress[1]);
		var negativeA2 = Inverter(muxAddress[0]);

		inputValues[0] = AND3(negativeA2, negativeA1, negativeA0);
		inputValues[1] = AND3(negativeA2, negativeA1, muxAddress[2]);
		inputValues[2] = AND3(negativeA2, muxAddress[1], negativeA0);
		inputValues[3] = AND3(negativeA2, muxAddress[1], muxAddress[2]);
		inputValues[4] = AND3(muxAddress[0], negativeA1, negativeA0);
		inputValues[5] = AND3(muxAddress[0], negativeA1, muxAddress[2]);
		inputValues[6] = AND3(muxAddress[0], muxAddress[1], negativeA0);
		inputValues[7] = AND3(muxAddress[0], muxAddress[1], muxAddress[2]);

		for(var i=0; i<inputValues.length; i++){
			for(var j=0; j<chosenOutputs.length; j++){
				if(chosenOutputs[j] == i)
				{
					orValues[k] = inputValues[i];
					k++;
				}
			}
		}

		$(rightPoint).text(OR(orValues));
	}
}

$(document).ready(function(){
	$("body").on("click", ".dropdown-icon", function(){
		$(".izbor").toggleClass("responsive-show");
		$(".help").toggleClass("responsive-show");
		$("#redovi-divova").toggleClass("responsive-show");
	});

});