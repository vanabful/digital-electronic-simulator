function setValues(){
		const prvi = $("#outer-dropzone").find(".x1").find(".pozitivan");
		const drugi = $("#outer-dropzone").find(".x2").find(".pozitivan");
		const treci = $("#outer-dropzone").find(".x3").find(".pozitivan");
		const cetvrti = $("#outer-dropzone").find(".x4").find(".pozitivan");
		
		const negPrvi = $("#outer-dropzone").find(".x1").find(".negiran");
		const negDrugi = $("#outer-dropzone").find(".x2").find(".negiran");
		const negTreci = $("#outer-dropzone").find(".x3").find(".negiran");
		const negCetvrti = $("#outer-dropzone").find(".x4").find(".negiran");
		
		for(var i=0; i<prvi.length; i++)
		{
			$(prvi[i]).text($("#x1-num").text());
		}
		
		for(var i=0; i<drugi.length; i++)
		{
			$(drugi[i]).text($("#x2-num").text());
		}
		
		for(var i=0; i<treci.length; i++)
		{
			$(treci[i]).text($("#x3-num").text());
		}
		
		for(var i=0; i<cetvrti.length; i++)
		{
			$(cetvrti[i]).text($("#x4-num").text());
		}
		
		for(var i=0; i<negPrvi.length; i++)
		{
			if($(prvi[0]).text() == "1")
				$(negPrvi[i]).text("0");
			else
				$(negPrvi[i]).text("1");
		}
		
		for(var i=0; i<negDrugi.length; i++)
		{
			if($(drugi[0]).text() == "1")
				$(negDrugi[i]).text("0");
			else
				$(negDrugi[i]).text("1");
		}
		
		for(var i=0; i<negTreci.length; i++)
		{
			if($(treci[0]).text() == "1")
				$(negTreci[i]).text("0");
			else
				$(negTreci[i]).text("1");
		}
		
		for(var i=0; i<negCetvrti.length; i++)
		{
			if($(cetvrti[0]).text() == "1")
				$(negCetvrti[i]).text("0");
			else
				$(negCetvrti[i]).text("1");
		}
	}