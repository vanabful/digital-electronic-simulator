$("#nand-table").append('<tr><th>i</th><th>x<sub>1</sub></th><th>x<sub>2</sub></th><th>x<sub>3</sub></th><th>x<sub>4</sub></th><th>y</th></tr>')
          .append('<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>')
          .append('<tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>R</td></tr>')
          .append('<tr><td class="yellow">2</td><td>0</td><td>0</td><td>1</td><td>0</td><td class="yellow">1</td></tr>')
          .append('<tr class="line"><td class="yellow">3</td><td>0</td><td>0</td><td>1</td><td>1</td><td class="yellow">1</td></tr>')
          .append('<tr><td>4</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>')
          .append('<tr><td class="yellow">5</td><td>0</td><td>1</td><td>0</td><td>1</td><td class="yellow">1</td></tr>')
          .append('<tr><td>6</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>')
          .append('<tr class="line"><td class="yellow">7</td><td>0</td><td>1</td><td>1</td><td>1</td><td class="yellow">1</td></tr>')
          .append('<tr><td>8</td><td>1</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>')
          .append('<tr><td>9</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>')
          .append('<tr><td>10</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>')
          .append('<tr class="line"><td class="yellow">11</td><td>1</td><td>0</td><td>1</td><td>1</td><td class="yellow">1</td></tr>')
          .append('<tr><td>12</td><td>1</td><td>1</td><td>0</td><td>0</td><td>R</td></tr>')
          .append('<tr><td class="yellow">13</td><td>1</td><td>1</td><td>0</td><td>1</td><td class="yellow">1</td></tr>')
          .append('<tr><td>14</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>')
          .append('<tr><td>15</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>');

$("#nor-table").append('<tr><th>i</th><th>x<sub>1</sub></th><th>x<sub>2</sub></th><th>x<sub>3</sub></th><th>x<sub>4</sub></th><th>y</th><th class="y-negative">y</th></tr>')
               .append('<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>')
               .append('<tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>')
               .append('<tr><td>2</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>')
               .append('<tr class="line"><td>3</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>')
               .append('<tr><td>4</td><td>0</td><td>1</td><td>0</td><td>0</td><td>R</td><td>R</td></tr>')
               .append('<tr><td>5</td><td>0</td><td>1</td><td>0</td><td>1</td><td>R</td><td>R</td></tr>')
               .append('<tr><td>6</td><td>0</td><td>1</td><td>1</td><td>0</td><td>R</td><td>R</td></tr>')
               .append('<tr class="line"><td class="yellow">7</td><td>0</td><td>1</td><td>1</td><td>1</td><td class="yellow">0</td><td>1</td></tr>')
               .append('<tr><td>8</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>')
               .append('<tr><td>9</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>')
               .append('<tr><td class="yellow">10</td><td>1</td><td>0</td><td>1</td><td>0</td><td class="yellow">0</td><td>1</td></tr>')
               .append('<tr class="line"><td class="yellow">11</td><td>1</td><td>0</td><td>1</td><td>1</td><td class="yellow">0</td><td>1</td></tr>')
               .append('<tr><td class="yellow">12</td><td>1</td><td>1</td><td>0</td><td>0</td><td class="yellow">0</td><td>1</td></tr>')
               .append('<tr><td class="yellow">13</td><td>1</td><td>1</td><td>0</td><td>1</td><td class="yellow">0</td><td>1</td></tr>')
               .append('<tr><td class="yellow">14</td><td>1</td><td>1</td><td>1</td><td>0</td><td class="yellow">0</td><td>1</td></tr>')
               .append('<tr><td class="yellow">15</td><td>1</td><td>1</td><td>1</td><td>1</td><td class="yellow">0</td><td>1</td></tr>');

$("#mux-table").append('<tr><th>i</th><th>x<sub>1</sub></th><th>x<sub>2</sub></th><th>x<sub>3</sub></th><th>y</th></tr>')
               .append('<tr><td class="yellow">0</td><td>0</td><td>0</td><td>0</td><td class="yellow">1</td></tr>')
               .append('<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>')
               .append('<tr><td class="yellow">2</td><td>0</td><td>1</td><td>0</td><td class="yellow">1</td></tr>')
               .append('<tr class="line"><td class="yellow">3</td><td>0</td><td>1</td><td>1</td><td class="yellow">1</td></tr>')
               .append('<tr><td class="yellow">4</td><td>1</td><td>0</td><td>0</td><td class="yellow">1</td></tr>')
               .append('<tr><td>5</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>')
               .append('<tr><td>6</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>')
               .append('<tr><td>7</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>');

$("#demux-table").append('<tr><th>i</th><th>x<sub>1</sub></th><th>x<sub>2</sub></th><th>x<sub>3</sub></th><th>y</th></tr>')
               .append('<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>')
               .append('<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>')
               .append('<tr><td class="yellow">2</td><td>0</td><td>1</td><td>0</td><td class="yellow">1</td></tr>')
               .append('<tr class="line"><td class="yellow">3</td><td>0</td><td>1</td><td>1</td><td class="yellow">1</td></tr>')
               .append('<tr><td class="yellow">4</td><td>1</td><td>0</td><td>0</td><td class="yellow">1</td></tr>')
               .append('<tr><td class="yellow">5</td><td>1</td><td>0</td><td>1</td><td class="yellow">1</td></tr>')
               .append('<tr><td>6</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>')
               .append('<tr><td>7</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>');

$("#conjuction-nor").hide();
$(".de-morgan").hide();
$(".overline-nor-one").hide();
$(".overline-nor-final").hide();
$("#algebar").hide();

$("#algebar-nor").hide();
$(".overline-nand").hide();
$(".de-morgan-nand").hide();
$("#de-morgan-algebar").hide();

$(".mux-solution").hide();
$(".demux-solution").hide();

$(document).ready(function(){

    $(".veich").on("click", ".button-click-nand", function(){
        if($("#veich-image-switch").attr("src") == "images/veich-empty.png"){
            setTimeout(function(){
                $("#veich-image-switch").attr("src","images/veich-arrow1.png");
            },500);
            setTimeout(function(){
                $("#veich-image-switch").attr("src","images/veich-arrow2.png");
            },2000);
            setTimeout(function(){
                $("#veich-image-switch").attr("src","images/veich-arrow3.png");
            },3000);
            setTimeout(function(){
                $("#veich-image-switch").attr("src","images/veich-arrow4.png");
            },4000);
        }
        else if($("#veich-image-switch").attr("src") == "images/veich-arrow4.png"){
            $("#veich-image-switch").attr("src","images/veich.png");
            $("#algebar").show();
         }
        else if($("#veich-image-switch").attr("src") == "images/veich.png"){
            $("#veich-image-switch").attr("src","images/veich-1.png");
            $("#algebar").empty();
            $("#algebar").append('y = <em class="yellow"><strong>x<sub>1</sub></strong>&<strong>x<sub>2</sub></strong></em> V x<sub>3</sub>&x<sub>4</sub> V x<sub>2</sub>&x<sub>4</sub>');
            $(".algebar-function p strong").css("border-top", "1px solid #ffcc33");
         }
        else if($("#veich-image-switch").attr("src") == "images/veich-1.png"){
            $("#veich-image-switch").attr("src","images/veich-2.png");
            $(".algebar-function p strong").css("border-top", "1px solid #3b3b3b");
            $("#algebar").empty();
            $("#algebar").append('y = <strong>x<sub>1</sub></strong>&<strong>x<sub>2</sub></strong> V <em class="green">x<sub>3</sub>&x<sub>4</sub></em> V x<sub>2</sub>&x<sub>4</sub>');
        }
        else if($("#veich-image-switch").attr("src") == "images/veich-2.png"){
            $("#veich-image-switch").attr("src","images/veich-3.png");
            $(".algebar-function p strong").css("border-top", "1px solid #3b3b3b");
            $("#algebar").empty();
            $("#algebar").append('y = <strong>x<sub>1</sub></strong>&<strong>x<sub>2</sub></strong> V x<sub>3</sub>&x<sub>4</sub> V <em class="blue">x<sub>2</sub>&x<sub>4</sub></em>');
        }
        else if($("#veich-image-switch").attr("src") == "images/veich-3.png"){
            $("#algebar").empty();
            $("#algebar").append('y = <em class="yellow"><strong>x<sub>1</sub></strong>&<strong>x<sub>2</sub></strong></em> V <em class="green">x<sub>3</sub>&x<sub>4</sub></em> V <em class="blue">x<sub>2</sub>&x<sub>4</sub></em>');
            $(".algebar-function #algebar strong").css("border-top", "1px solid #ffcc33");

            $(".overline-nand").fadeIn().show();
            $(".de-morgan-nand").fadeIn().show();
            $("#de-morgan-algebar").fadeIn().show();
        }
            
    });

    $(".veich-nor").on("click", ".button-click-nor", function(){
        if($("#veich-nor-image-switch").attr("src") == "images/veich-empty.png"){
            setTimeout(function(){
                $("#veich-nor-image-switch").attr("src","images/veich-arrow1.png");
            },500);
            setTimeout(function(){
                $("#veich-nor-image-switch").attr("src","images/veich-arrow2.png");
            },2000);
            setTimeout(function(){
                $("#veich-nor-image-switch").attr("src","images/veich-arrow3.png");
            },3000);
            setTimeout(function(){
                $("#veich-nor-image-switch").attr("src","images/veich-arrow4.png");
            },4000);
        }
        else if($("#veich-nor-image-switch").attr("src") == "images/veich-arrow4.png"){
            $("#veich-nor-image-switch").attr("src","images/veich-nor.png");
            $("#algebar-nor").show();
            $("#algebar-nor").empty();
         }
        else if($("#veich-nor-image-switch").attr("src") == "images/veich-nor.png"){
            $("#veich-nor-image-switch").attr("src","images/veich-nor-1.png");
            $("#algebar-nor").empty();
            $("#algebar-nor").append('<strong>y</strong> = <b class="yellow">x<sub>1</sub>&x<sub>3</sub></b> V x<sub>2</sub>');
         }
        else if($("#veich-nor-image-switch").attr("src") == "images/veich-nor-1.png"){
            $("#veich-nor-image-switch").attr("src","images/veich-nor-2.png");
            $("#algebar-nor").empty();
            $("#algebar-nor").append('<strong>y</strong> = x<sub>1</sub>&x<sub>3</sub> V <b class="blue">x<sub>2</sub></b>');
        }
        else if($("#veich-nor-image-switch").attr("src") == "images/veich-nor-2.png"){
            $("#algebar-nor").empty();
            $("#algebar-nor").append('<strong>y</strong> = <b class="yellow">x<sub>1</sub>&x<sub>3</sub></b> V <b class="blue">x<sub>2</sub></b>');

            $("#conjuction-nor").fadeIn().show();
            $(".de-morgan").fadeIn().show();
            $(".overline-nor-one").fadeIn().show();
            $(".overline-nor-final").fadeIn().show();
        }
            
    });

    $(".veich-mux").on("click", ".button-click-mux", function(){
        if($("#veich-mux-image-switch").attr("src") == "images/veich-mux.png"){
            setTimeout(function(){
                $("#veich-mux-image-switch").attr("src","images/veich-mux2.png");
            },500);
            setTimeout(function(){
                $("#veich-mux-image-switch").attr("src","images/veich-mux3.png");
            },2000);
            setTimeout(function(){
                $("#veich-mux-image-switch").attr("src","images/veich-mux1.png");
            },3000);
        }
        else if($("#veich-mux-image-switch").attr("src") == "images/veich-mux1.png"){
           setTimeout(function(){
                $("#veich-mux-image-switch").attr("src","images/veich-mux4.png");
            },500);
            setTimeout(function(){
                $("#veich-mux-image-switch").attr("src","images/veich-mux5.png");
            },2000);
         }
        else if($("#veich-mux-image-switch").attr("src") == "images/veich-mux5.png"){
            $("#veich-mux-image-switch").attr("src","images/veich-mux6.png");
         }
         else if($("#veich-mux-image-switch").attr("src") == "images/veich-mux6.png"){
            $("#veich-mux-image-switch").attr("src","images/veich-mux7.png");
         }
         else if($("#veich-mux-image-switch").attr("src") == "images/veich-mux7.png"){
            $("#veich-mux-image-switch").attr("src","images/veich-mux8.png");
         }
         else if($("#veich-mux-image-switch").attr("src") == "images/veich-mux8.png"){
            $("#veich-mux-image-switch").attr("src","images/veich-mux9.png");
         }
         else if($("#veich-mux-image-switch").attr("src") == "images/veich-mux9.png"){
            $("#veich-mux-image-switch").attr("src","images/veich-mux10.png");
            $(".mux-solution").show();
         }
            
    });

    $(".veich-demux").on("click", ".button-click-demux", function(){
        if($("#veich-demux-image-switch").attr("src") == "images/veich-mux.png"){
            setTimeout(function(){
                $("#veich-demux-image-switch").attr("src","images/veich-mux2.png");
            },500);
            setTimeout(function(){
                $("#veich-demux-image-switch").attr("src","images/veich-mux3.png");
            },2000);
            setTimeout(function(){
                $("#veich-demux-image-switch").attr("src","images/veich-demux1.png");
            },3000);
        }
        else if($("#veich-demux-image-switch").attr("src") == "images/veich-demux1.png"){
           setTimeout(function(){
                $("#veich-demux-image-switch").attr("src","images/veich-demux4.png");
            },500);
            setTimeout(function(){
                $("#veich-demux-image-switch").attr("src","images/veich-demux5.png");
            },2000);
         }
        else if($("#veich-demux-image-switch").attr("src") == "images/veich-demux5.png"){
            $("#veich-demux-image-switch").attr("src","images/veich-demux6.png");
         }
         else if($("#veich-demux-image-switch").attr("src") == "images/veich-demux6.png"){
            $("#veich-demux-image-switch").attr("src","images/veich-demux7.png");
         }
         else if($("#veich-demux-image-switch").attr("src") == "images/veich-demux7.png"){
            $("#veich-demux-image-switch").attr("src","images/veich-demux8.png");
         }
         else if($("#veich-demux-image-switch").attr("src") == "images/veich-demux8.png"){
            $("#veich-demux-image-switch").attr("src","images/veich-demux9.png");
         }
         else if($("#veich-demux-image-switch").attr("src") == "images/veich-demux9.png"){
            $("#veich-demux-image-switch").attr("src","images/veich-demux10.png");
            $(".demux-solution").show();
         }
            
    });


    $(".veich").on("click", ".final-step", function(){
        $("#veich-image-switch").attr("src","images/veich-3.png");
        $("#algebar").empty();
        $("#algebar").append('y = <em class="yellow"><strong>x<sub>1</sub></strong>&<strong>x<sub>2</sub></strong></em> V <em class="green">x<sub>3</sub>&x<sub>4</sub></em> V <em class="blue">x<sub>2</sub>&x<sub>4</sub></em>');
        $(".algebar-function #algebar strong").css("border-top", "1px solid #ffcc33");
        $("#algebar").fadeIn().show();
        $(".overline-nand").fadeIn().show();
        $(".de-morgan-nand").fadeIn().show();
        $("#de-morgan-algebar").fadeIn().show();

    });

    $(".veich-nor").on("click", ".final-step-nor", function(){
        $("#veich-nor-image-switch").attr("src","images/veich-nor-2.png");
        $("#algebar-nor").empty();
        $("#algebar-nor").append('<strong>y</strong> = <b class="yellow">x<sub>1</sub>&x<sub>3</sub></b> V <b class="blue">x<sub>2</sub></b>');
        $("#algebar-nor").fadeIn().show();
        $("#conjuction-nor").fadeIn().show();
        $(".de-morgan").fadeIn().show();
        $(".overline-nor-one").fadeIn().show();
        $(".overline-nor-final").fadeIn().show();

    });

    $(".veich-mux").on("click", ".final-step-mux", function(){
        $("#veich-mux-image-switch").attr("src","images/veich-mux10.png");
       $(".mux-solution").show();

    });

    $(".veich-demux").on("click", ".final-step-demux", function(){
        $("#veich-demux-image-switch").attr("src","images/veich-demux10.png");
       $(".demux-solution").show();

    });

});