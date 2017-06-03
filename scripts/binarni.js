function BinaryAdd(variableValues){
	
	var firstNumber = [];
	var secondNumber = [];
	var carry = 0;
	var result = [];
	var k=0;
	
	for(var i=0; i<variableValues.length;i++){
		firstNumber[i] = variableValues[i];
	}
	
	if(variableValues.length == "2")
		secondNumber = ["0", "1"];
	else if(variableValues.length == "3")
		secondNumber = ["0", "0", "1"];
	else if(variableValues.length == "4")
		secondNumber = ["0", "0", "0", "1"];
	else
		secondNumber = ["1"];
	
	for (var j = firstNumber.length-1; j >= 0; j--)
	{
		if (parseInt(firstNumber[j]) + parseInt(secondNumber[j]) + carry == "0")
		{
			result[j] = "0";
			carry = 0;
		}

		else if (parseInt(firstNumber[j]) + parseInt(secondNumber[j]) + carry == "1")
		{
			result[j] = "1";
			carry = 0;
		}

		else if (parseInt(firstNumber[j]) + parseInt(secondNumber[j]) + carry == "2")
		{
			result[j] = "0";
			carry = 1;
		}

		else if (parseInt(firstNumber[j]) + parseInt(secondNumber[j]) + carry > "2")
		{
			result[j] = "1";
			carry = 1;
		}
		
	}
	

	return result;
}

function getValues(numOfVariables){
	
	var variableValues = [];
	
	if(numOfVariables == "4"){
		variableValues[0] = $("#x1-num").text();
		variableValues[1] = $("#x2-num").text();
		variableValues[2] = $("#x3-num").text();
		variableValues[3] = $("#x4-num").text();
	}
	
	else if(numOfVariables == "3"){
		variableValues[0] = $("#x1-num").text();
		variableValues[1] = $("#x2-num").text();
		variableValues[2] = $("#x3-num").text();
	}
	
	else if(numOfVariables == "2"){
		variableValues[0] = $("#x1-num").text();
		variableValues[1] = $("#x2-num").text();
	}
	
	else{
		variableValues[0] = $("#x1-num").text();
	}
		
	
	variableValues = BinaryAdd(variableValues);
	
	$("#x1-num").text(variableValues[0]);
	
	if(numOfVariables == "2")
		$("#x2-num").text(variableValues[1]);
	
	else if(numOfVariables == "3"){
		$("#x2-num").text(variableValues[1]);
		$("#x3-num").text(variableValues[2]);
	}
	else if(numOfVariables == "4"){
		$("#x2-num").text(variableValues[1]);
		$("#x3-num").text(variableValues[2]);
		$("#x4-num").text(variableValues[3]);
	}
	
	setColors();
		
}

function setColors(){
	if($("#x1-num").text() == "1")
		$("#x1-num").css("border-bottom-color", "#ffcc33");
	else
		$("#x1-num").css("border-bottom-color", "#999");
	
	if($("#x2-num").text() == "1")
		$("#x2-num").css("border-bottom-color", "#ffcc33");
	else
		$("#x2-num").css("border-bottom-color", "#999");
	
	if($("#x3-num").text() == "1")
		$("#x3-num").css("border-bottom-color", "#ffcc33");
	else
		$("#x3-num").css("border-bottom-color", "#999");
	
	if($("#x4-num").text() == "1")
		$("#x4-num").css("border-bottom-color", "#ffcc33");
	else
		$("#x4-num").css("border-bottom-color", "#999");
}