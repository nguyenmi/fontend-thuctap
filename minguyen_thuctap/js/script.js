$(document).ready(function(){
	$(".video").slick({
		prevArrow: '.next-prev .left',
		nextArrow: '.next-prev .right',
	});


	// this is js slick slider news

	$(".slider1").slick({
		prevArrow: '.slider-next .left',
		nextArrow: '.slider-next .right',
		slidesToShow: 4,
  		slidesToScroll: 1,
  		// autoplay: true,
  		// autoplaySpeed: 6000,

	});

    $("button").click(function(){
        $(".navigation").toggleClass('show');
    });

	// this is js slick video-detail
	$(".slick-detailvideo").slick({
		prevArrow: '.next-prev .left',
		nextArrow: '.next-prev .right',
		slidesToShow: 3,
  		slidesToScroll: 1,
  		// autoplay: true,
  		// autoplaySpeed: 6000,

	});
});
