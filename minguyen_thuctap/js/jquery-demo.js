<<<<<<< HEAD
$(document).ready(function(){
	// this is jquery selections
	$("button").click(function(){
		$("h4").hide();
		$("#text").hide();
		$(".text").hide();
	});
	// this is jquery Event 
	$('.Click').click(function() {
		$(this).hide();
	});
	$('.dblclick').dblclick(function() {
		$(this).hide();
	});
	$('.moussenter').mouseenter(function(){
		alert("This is jquery Event moussenter");
	});
	$('.mouseleave').mouseleave(function() {
		alert("this is jquery Event Mouserleave");
	})
	$('.mousedown').mousedown(function(){
		alert("this is Jquery Event Mousedown");
	})
	$('.mouseup').mouseup(function(){
		alert("this is Jquery Event Mouseup");
	})
	$('.hover').hover(function(){
		alert("this is jquery Event hover");
	})
	$('.on').on({
		click: function() {
			$(this).css("background-color", "red");
		},
		mousedown :function(){
			$(this).css("background-color","green");
		},
		mouseleave :function(){
			$(this).css("background-color","yellow");
		}
	});
	// this is jquery Effects
	$('#hide').click(function() {
		$('.hides').hide(1000);
	});
	$('#show').click(function() {
		$('.hides').show(1000);
	});
	$('#toggle').click(function() {
		$('.toggle').toggle(1000);
	})
		//fade
	$('#fadein').click(function(){
		$('.div1').fadeIn();
		$('.div2').fadeIn("slow");
		$('.div3').fadeIn(1000);
	});
	$('#fadeout').click(function(){
		$('.div1').fadeOut();
		$('.div2').fadeOut("slow");
		$('.div3').fadeOut(1000);
	});
	$('#fadetoggle').click(function(){
		$('.div1').fadeToggle();
		$('.div2').fadeToggle("slow");
		$('.div3').fadeToggle(1000);
	});
	$('#fadeTo').click(function(){
		$('.div1').fadeTo("slow", 0.10);
		$('.div2').fadeTo("slow", 0.5);
		$('.div3').fadeTo("slow", 1);
	});
		//slide
	$('.sliderdown').click( function(){
		$('.content-slider').slideDown("slow");
	});
	$('.sliderup').click( function(){
		$('.content-slider').slideUp("slow");
	});
	$('.slidetoogle').click( function(){
		$('.content-slider').slideToggle("slow");
	});
		//animamtion
	$('#mani').click( function(){
		$('.content-animation').animate({
			width: '250px',
			height: '250px',
			opacity: '0.5',
			left: '300px'
		});
	});
	$('#using').click( function(){
		$('.content-animation').animate({
			width: '+=250px',
			height: '+=250px',
			left: '300px'
		});
	});
	$('#Pre-defined').click( function(){
		$('.content-animation').animate({
			height: 'toggle'
		});
	});
	$("#Queue").click(function(){
	    var content = $(".content-animation");
	    content.animate({height: '300px', opacity: '0.4'}, "slow");
	    content.animate({width: '300px', opacity: '0.8'}, "slow");
	    content.animate({height: '100px', opacity: '0.4'}, "slow");
	    content.animate({width: '100px', opacity: '0.8'}, "slow");
	}); 
		//stop()
	$("#sliderdown").click(function(){
        $(".content-sliders").slideDown(5000);
    });
    $("#stop").click(function(){
        $(".content-sliders").stop();
    });
    	// callback
	$('#Callback').click(function(){
		$('.content-callback').hide("slow", function(){
			alert("Jquery Callback function");
		});
	});
	$('#noCallback').click(function(){
		$('nocallback').hide(1000);
		alert("Jquery Callback not function");
	});
		// Chaining
	$('.chaining').click(function(){
		$('#content-chaining').css("color","red").slideDown(1000).slideUp(1000);
	});
	// Jquery Html
		//get html()
	$('#showhtml').click(function(){
		alert("Html: " + $('.contentshow').html());
	});
		// get text
	$('#showtext').click(function(){
		alert("Html: " + $('.contentshow').text());
	})
		// get value
	$('.showvalue').click(function(){
		alert("Value : " + $("#content-showvalue").val());
	});
		// attrubute
	$('#showattr').click(function() {
		alert($(".content-attr").attr("href"));
	});
	// jquery set
		// set html()
	$('#btn1').click(function() {
		$('#test1').html("update show set html");
	});
	$('#btn2').click(function() {
		$('#test2').text("update show set html");
	});
	$('#btn3').click(function() {
		$('#test3').val("Nguyễn Ngọc Diễn");
	});
		// callback html
	$("#btn5").click(function(){
        $("#test5").text(function(i, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });
		// callback text
    $("#btn4").click(function(){
        $("#test4").html(function(i, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });
    	// attrubute
    $('#attr-1').click(function() {
    	$('#title-attr').attr({
    		"href" : "https://nguyenngocdien.com",
    		"title" : "title-minguyen",
    	});
    });
    // jquery add
    	// jquery appen
    $("#idappend").click(function(){
        $(".append").append(" <b>Appended text</b>.");
    });
    	// jquery prepend
    $("#idprepend").click(function(){
        $(".append").prepend(" <b>Add Prepend text</b>.");
    });
    	// jquery affter
    $("#after").click(function(){
        $(".img-ba").after("<i>After</i>");
    });	
    	//jquery before
    $("#before").click(function(){
        $(".img-ba").before("<b>Before</b>");
    });
    // jquery remove
    $('#idremove').click(function() {
    	$('#content-remove').remove();
    });
     $('#idEremove').click(function() {
    	$('p').remove(".content-re1, .content-re2");
    });
    $('#idempty').click(function() {
    	$('#content-remove').empty();
    });
    // Jquery add class
    $("#id-addclass").click(function(){
    	$('.title-class').addClass("color-class");
    	$('.text-class').addClass("color-class");
    });
    // remove Class
    $("#id-removeclass").click(function(){
    	$('.title-class').removeClass("color-class");
    	$('.text-class').removeClass("color-class");
    });
    // toggle Class
    $("#id-toggleclass").click(function(){
    	$('.title-class').toggleClass("color-class");
    	$('.text-class').toggleClass("color-class");
    });
    // add Css
    $("#id-addcss").click(function(){
    	$('.addcss').css("color","red");
    });
    $("#id-addcss2").click(function(){
    	$('.content-addcss').css({"color":"white" , "background-color":"blue"});
    });
    // jquey demension
    $("#id-wh").click(function(){
    	var txt = "";
        txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px";
        $(".title-wh").html(txt);
    });
    	//inner width height +pading
    $("#id-innerwh").click(function(){
    	var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px" + "</br>";
        txt += "Inner Width of div: " + $(".title-wh").innerWidth() + " px" + "</br>";
        txt += "Inner Height of div: " + $(".title-wh").innerHeight() + " px";
        $(".title-wh").html(txt);
    });
    	//Outter width height +pading -border
    $("#id-outerwh").click(function(){
    	var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px"  + "</br>";
        txt += "Inner Width of div: " + $(".title-wh").outerWidth() + " px" + "</br>";
        txt += "Inner Height of div: " + $(".title-wh").outerHeight() + " px";
        $(".title-wh").html(txt);
    });
    	//Outter width height +pading -border -margin value(true and flase)
    $("#id-outerwh1").click(function(){
    	var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px"  + "</br>";
        txt += "Inner Width of div: " + $(".title-wh").outerWidth(true) + " px" + "</br>";
        txt += "Inner Height of div: " + $(".title-wh").outerHeight(true) + " px";
        $(".title-wh").html(txt);
    });
    	// add width height
    $("#id-addwh").click(function(){
        $(".title-wh").width(500).height(500);
        var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px"  + "</br>";
        $(".title-wh").html(txt);
    });
    	// alert jQuery More width() and height() window
    $("#iddemensitonwd").click(function(){
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
});
=======
$(document).ready(function(){
	// this is jquery selections
	$("button").click(function(){
		$("h4").hide();
		$("#text").hide();
		$(".text").hide();
	});
	// this is jquery Event 
	$('.Click').click(function() {
		$(this).hide();
	});
	$('.dblclick').dblclick(function() {
		$(this).hide();
	});
	$('.moussenter').mouseenter(function(){
		alert("This is jquery Event moussenter");
	});
	$('.mouseleave').mouseleave(function() {
		alert("this is jquery Event Mouserleave");
	})
	$('.mousedown').mousedown(function(){
		alert("this is Jquery Event Mousedown");
	})
	$('.mouseup').mouseup(function(){
		alert("this is Jquery Event Mouseup");
	})
	$('.hover').hover(function(){
		alert("this is jquery Event hover");
	})
	$('.on').on({
		click: function() {
			$(this).css("background-color", "red");
		},
		mousedown :function(){
			$(this).css("background-color","green");
		},
		mouseleave :function(){
			$(this).css("background-color","yellow");
		}
	});
	// this is jquery Effects
	$('#hide').click(function() {
		$('.hides').hide(1000);
	});
	$('#show').click(function() {
		$('.hides').show(1000);
	});
	$('#toggle').click(function() {
		$('.toggle').toggle(1000);
	})
		//fade
	$('#fadein').click(function(){
		$('.div1').fadeIn();
		$('.div2').fadeIn("slow");
		$('.div3').fadeIn(1000);
	});
	$('#fadeout').click(function(){
		$('.div1').fadeOut();
		$('.div2').fadeOut("slow");
		$('.div3').fadeOut(1000);
	});
	$('#fadetoggle').click(function(){
		$('.div1').fadeToggle();
		$('.div2').fadeToggle("slow");
		$('.div3').fadeToggle(1000);
	});
	$('#fadeTo').click(function(){
		$('.div1').fadeTo("slow", 0.10);
		$('.div2').fadeTo("slow", 0.5);
		$('.div3').fadeTo("slow", 1);
	});
		//slide
	$('.sliderdown').click( function(){
		$('.content-slider').slideDown("slow");
	});
	$('.sliderup').click( function(){
		$('.content-slider').slideUp("slow");
	});
	$('.slidetoogle').click( function(){
		$('.content-slider').slideToggle("slow");
	});
		//animamtion
	$('#mani').click( function(){
		$('.content-animation').animate({
			width: '250px',
			height: '250px',
			opacity: '0.5',
			left: '300px'
		});
	});
	$('#using').click( function(){
		$('.content-animation').animate({
			width: '+=250px',
			height: '+=250px',
			left: '300px'
		});
	});
	$('#Pre-defined').click( function(){
		$('.content-animation').animate({
			height: 'toggle'
		});
	});
	$("#Queue").click(function(){
	    var content = $(".content-animation");
	    content.animate({height: '300px', opacity: '0.4'}, "slow");
	    content.animate({width: '300px', opacity: '0.8'}, "slow");
	    content.animate({height: '100px', opacity: '0.4'}, "slow");
	    content.animate({width: '100px', opacity: '0.8'}, "slow");
	}); 
		//stop()
	$("#sliderdown").click(function(){
        $(".content-sliders").slideDown(5000);
    });
    $("#stop").click(function(){
        $(".content-sliders").stop();
    });
    	// callback
	$('#Callback').click(function(){
		$('.content-callback').hide("slow", function(){
			alert("Jquery Callback function");
		});
	});
	$('#noCallback').click(function(){
		$('nocallback').hide(1000);
		alert("Jquery Callback not function");
	});
		// Chaining
	$('.chaining').click(function(){
		$('#content-chaining').css("color","red").slideDown(1000).slideUp(1000);
	});
	// Jquery Html
		//get html()
	$('#showhtml').click(function(){
		alert("Html: " + $('.contentshow').html());
	});
		// get text
	$('#showtext').click(function(){
		alert("Html: " + $('.contentshow').text());
	})
		// get value
	$('.showvalue').click(function(){
		alert("Value : " + $("#content-showvalue").val());
	});
		// attrubute
	$('#showattr').click(function() {
		alert($(".content-attr").attr("href"));
	});
	// jquery set
		// set html()
	$('#btn1').click(function() {
		$('#test1').html("update show set html");
	});
	$('#btn2').click(function() {
		$('#test2').text("update show set html");
	});
	$('#btn3').click(function() {
		$('#test3').val("Nguyễn Ngọc Diễn");
	});
		// callback html
	$("#btn5").click(function(){
        $("#test5").text(function(i, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });
		// callback text
    $("#btn4").click(function(){
        $("#test4").html(function(i, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });
    	// attrubute
    $('#attr-1').click(function() {
    	$('#title-attr').attr({
    		"href" : "https://nguyenngocdien.com",
    		"title" : "title-minguyen",
    	});
    });
    // jquery add
    	// jquery appen
    $("#idappend").click(function(){
        $(".append").append(" <b>Appended text</b>.");
    });
    	// jquery prepend
    $("#idprepend").click(function(){
        $(".append").prepend(" <b>Add Prepend text</b>.");
    });
    	// jquery affter
    $("#after").click(function(){
        $(".img-ba").after("<i>After</i>");
    });	
    	//jquery before
    $("#before").click(function(){
        $(".img-ba").before("<b>Before</b>");
    });
    // jquery remove
    $('#idremove').click(function() {
    	$('#content-remove').remove();
    });
     $('#idEremove').click(function() {
    	$('p').remove(".content-re1, .content-re2");
    });
    $('#idempty').click(function() {
    	$('#content-remove').empty();
    });
    // Jquery add class
    $("#id-addclass").click(function(){
    	$('.title-class').addClass("color-class");
    	$('.text-class').addClass("color-class");
    });
    // remove Class
    $("#id-removeclass").click(function(){
    	$('.title-class').removeClass("color-class");
    	$('.text-class').removeClass("color-class");
    });
    // toggle Class
    $("#id-toggleclass").click(function(){
    	$('.title-class').toggleClass("color-class");
    	$('.text-class').toggleClass("color-class");
    });
    // add Css
    $("#id-addcss").click(function(){
    	$('.addcss').css("color","red");
    });
    $("#id-addcss2").click(function(){
    	$('.content-addcss').css({"color":"white" , "background-color":"blue"});
    });
    // jquey demension
    $("#id-wh").click(function(){
    	var txt = "";
        txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px";
        $(".title-wh").html(txt);
    });
    	//inner width height +pading
    $("#id-innerwh").click(function(){
    	var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px" + "</br>";
        txt += "Inner Width of div: " + $(".title-wh").innerWidth() + " px" + "</br>";
        txt += "Inner Height of div: " + $(".title-wh").innerHeight() + " px";
        $(".title-wh").html(txt);
    });
    	//Outter width height +pading -border
    $("#id-outerwh").click(function(){
    	var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px"  + "</br>";
        txt += "Inner Width of div: " + $(".title-wh").outerWidth() + " px" + "</br>";
        txt += "Inner Height of div: " + $(".title-wh").outerHeight() + " px";
        $(".title-wh").html(txt);
    });
    	//Outter width height +pading -border -margin value(true and flase)
    $("#id-outerwh1").click(function(){
    	var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px"  + "</br>";
        txt += "Inner Width of div: " + $(".title-wh").outerWidth(true) + " px" + "</br>";
        txt += "Inner Height of div: " + $(".title-wh").outerHeight(true) + " px";
        $(".title-wh").html(txt);
    });
    	// add width height
    $("#id-addwh").click(function(){
        $(".title-wh").width(500).height(500);
        var txt = "";
    	txt += "Width of div: " + $(".title-wh").width() + " px" +  "</br>";
        txt += "Height of div: " + $(".title-wh").height() + " px"  + "</br>";
        $(".title-wh").html(txt);
    });
    	// alert jQuery More width() and height() window
    $("#iddemensitonwd").click(function(){
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
});
>>>>>>> bf6c8d879e38448597268a94910d73844eab59d3
