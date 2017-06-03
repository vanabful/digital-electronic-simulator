jqSimpleConnect = new Object;
jqSimpleConnect._idGenerator = 0;
jqSimpleConnect._connections = new Object;
jqSimpleConnect._positionConnection = function(a) {
    var b = a.elementA.offset();
    b.left = parseInt(b.left, 10) + parseInt(a.elementA.outerWidth() / 2, 10);
    b.top = parseInt(b.top, 10) + parseInt(a.elementA.outerHeight() / 2, 10);
    var c = a.elementB.offset();
    c.left = parseInt(c.left, 10) + parseInt(a.elementB.outerWidth() / 2, 10);
    c.top = parseInt(c.top, 10) + parseInt(a.elementB.outerHeight() / 2, 10);
    var d = jQuery("#" + a.id + "_1");
    var e = jQuery("#" + a.id + "_2");
    var f = jQuery("#" + a.id + "_3");
    if (b.left == c.left || b.top == c.top) {
        d.show();
        e.hide();
        f.hide();
        if (b.left == c.left) {
            jqSimpleConnect._positionVerticalLine(d, b, c, a.radius, a.roundedCorners)
        } else {
            jqSimpleConnect._positionHorizontalLine(d, b, c, a.radius, a.roundedCorners)
        }
    } else {
        if (a.anchorA != a.anchorB) {
            d.show();
            e.show();
            f.hide();
            var g = new Object;
            if (a.anchorA == "vertical") {
                g.left = b.left;
                g.top = c.top;
                jqSimpleConnect._positionVerticalLine(d, b, g, a.radius, a.roundedCorners);
                jqSimpleConnect._positionHorizontalLine(e, c, g, a.radius, a.roundedCorners)
            } else {
                g.left = c.left;
                g.top = b.top;
                jqSimpleConnect._positionVerticalLine(d, c, g, a.radius, a.roundedCorners);
                jqSimpleConnect._positionHorizontalLine(e, b, g, a.radius, a.roundedCorners)
            }
        } else {
            d.show();
            e.show();
            f.show();
            var h = new Object;
            var i = new Object;
            if (a.anchorA == "vertical") {
                h.top = parseInt((b.top + c.top) / 2, 10);
                i.top = h.top;
                h.left = b.left;
                i.left = c.left;
                jqSimpleConnect._positionVerticalLine(d, b, h, a.radius, a.roundedCorners);
                jqSimpleConnect._positionVerticalLine(e, c, i, a.radius, a.roundedCorners);
                jqSimpleConnect._positionHorizontalLine(f, h, i, a.radius, a.roundedCorners)
            } else {
                h.left = parseInt((b.left + c.left) / 2, 10);
                i.left = h.left;
                h.top = b.top;
                i.top = c.top;
                jqSimpleConnect._positionHorizontalLine(d, b, h, a.radius, a.roundedCorners, h);
                jqSimpleConnect._positionHorizontalLine(e, c, i, a.radius, a.roundedCorners, h);
                jqSimpleConnect._positionVerticalLine(f, h, i, a.radius, a.roundedCorners)
            }
        }
    }
};
jqSimpleConnect._positionVerticalLine = function(a, b, c, d, e) {
    var f = parseInt(d / 2, 10);
	var count = 0;
	for(var i=0; i<data.length; i++){
		var offset = $(data[i].connections).offset();
		if(offset.left == (b.left-f)){
			a.css("left", b.left - f + 10);
			count++;
		}
	}
	if(count == "0")
		a.css("left", b.left - f);
    a.css("top", b.top > c.top ? c.top - f : b.top - f);
    a.css("width", d + "px");
    a.css("height", (b.top > c.top ? b.top - c.top + d : c.top - b.top + d) + "px");
	a.attr("title", "Delete on click");
};
jqSimpleConnect._positionHorizontalLine = function(a, b, c, d, e, g) {
    var f = parseInt(d / 2, 10);
	var count = 0;
	for(var i=0; i<data.length; i++){
		var offset = $(data[i].connections).offset();
		if(offset.left == (g.left-f)){
			a.css("left", b.left > c.left ? c.left - f + 10 : b.left - f + 10);
			count++;
		}
	}
	if(count == "0"){
		a.css("left", b.left > c.left ? c.left - f : b.left - f);
	}
    a.css("top", b.top - f);
    a.css("height", d + "px");
	a.css("width", (b.left > c.left ? b.left - c.left + d : c.left - b.left + d) + "px");
	a.attr("title", "Delete on click");
};
jqSimpleConnect.connect = function(a, b, c) {
    if (a == null || jQuery(a).size() == 0 || b == null || jQuery(b).size() == 0) {
        return null
    }
    a = jQuery(a);
    if (a.size() > 1) a = a.first();
    b = jQuery(b);
    if (b.size() > 1) b = b.first();
    var d = new Object;
    d.id = "jqSimpleConnect_" + jqSimpleConnect._idGenerator++;
    d.elementA = a;
    d.elementB = b;
	d.borderColor = c != null && c.borderColor != null ? c.borderColor + "" : "black";
	d.borderWidth = c != null && c.borderWidth !=null ? c.borderWidth + "" : "1px";
	d.style = c != null && c.style !=null ? c.style + "" : "solid";
    d.color = c != null && c.color != null ? c.color + "" : "#808080";
    d.radius = c != null && c.radius != null && !isNaN(c.radius) ? parseInt(c.radius, 10) : 5;
    d.anchorA = c != null && c.anchorA != null && (c.anchorA == "vertical" || c.anchorA == "horizontal") ? c.anchorA : "horizontal";
    d.anchorB = c != null && c.anchorB != null && (c.anchorB == "vertical" || c.anchorB == "horizontal") ? c.anchorB : "horizontal";
    d.roundedCorners = c != null && c.roundedCorners != null && (c.roundedCorners == true || c.roundedCorners == "true");
    jqSimpleConnect._connections[d.id] = d;
    var e = '<div id="divUniqueIdentifier" class="jqSimpleConnect ' + d.id + '" ' + 'style="width:' + d.radius + "px; " + "border-color:" + d.borderColor + ";" + "height:" + d.radius + "px; " + "background-color:" + d.color + "; " + "border-width:" + d.borderWidth + "px;" + "border-style:" + d.style + ";" + (d.roundedCorners ? "border-radius:" + "60px;" : "") + 'position:absolute;"></div>';
    jQuery("body").prepend(e.replace("divUniqueIdentifier", d.id + "_1"));
    jQuery("body").prepend(e.replace("divUniqueIdentifier", d.id + "_2"));
    jQuery("body").prepend(e.replace("divUniqueIdentifier", d.id + "_3"));
    jqSimpleConnect._positionConnection(d);
    return d.id
};
jqSimpleConnect.repaintConnection = function(a) {
    var b = jqSimpleConnect._connections[a];
    if (b != null) {
        jqSimpleConnect._positionConnection(b);
        return true
    }
    return false
};
jqSimpleConnect.repaintAll = function() {
    for (var a in jqSimpleConnect._connections) {
        jqSimpleConnect._positionConnection(jqSimpleConnect._connections[a])
    }
};
jqSimpleConnect.removeConnection = function(a) {
    if (jqSimpleConnect._connections[a] != null) {
        jQuery(".jqSimpleConnect." + a).remove();
        jqSimpleConnect._connections[a] = null;
        delete jqSimpleConnect._connections[a];
        return true
    }
    return false
};
jqSimpleConnect.removeAll = function() {
    jQuery(".jqSimpleConnect").remove();
    for (var a in jqSimpleConnect._connections) {
        jqSimpleConnect._connections[a] = null;
        delete jqSimpleConnect._connections[a]
    }
}