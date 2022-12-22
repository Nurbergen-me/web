$(document).ready(function(){

	$('a.go-to').click(function (e) {
	e.preventDefault();
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body, html').animate({scrollTop: destination}, 800);
  });


	// Таймер обратного отсчета
    var current_date = new Date();// текущая дата
        current_date.setDate(current_date.getDate())
        curDay = current_date.getDate(),
        curMonth = current_date.getMonth(),
        curYear = current_date.getFullYear();
        // curDay = 2,
        // curMonth = 4,
        // curYear = 2018;

    $('#counter1').countMe(curYear, curMonth, curDay+4, '#counter1');


	// Таймер обратного отсчета
    var current_date = new Date();// текущая дата
        current_date.setDate(current_date.getDate())
        curDay = current_date.getDate(),
        curMonth = current_date.getMonth(),
        curYear = current_date.getFullYear();
        // curDay = 2,
        // curMonth = 4,
        // curYear = 2018;

    $('#counter2').countMe(curYear, curMonth, curDay+4, '#counter2');



    //Carousel

    $('.picture__slider').owlCarousel({
    	center: true,
	    loop:true,
	    margin:144,
	    responsiveClass:true,
	    autoWidth:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        992:{
	            items:1,
	            nav:true,
	            loop:true
	        }
	    }
	});



	//Calculator ||||||||||||||||||||||||

	var totalKey = 0;

	$("#calc__input_second").val("1");

 $( "input" ).keyup(function() {
 		var firstValue  = Number($('#calc__input_first').val());
 		var secondValue = Number($('#calc__input_second').val());
	    var thirdValue = Number($('#calc__input_third').val());	

	  totalKey =(firstValue + secondValue + thirdValue);

	  console.log(totalKey);

		$("#total").html(total * totalKey);
		$( ".main-sum" ).val(total * totalKey);
		$( ".second-sum" ).val(totalKey);
		$( ".third-sum" ).val(total);
		$( ".avalue" ).val(firstValue);
		$( ".bvalue" ).val(secondValue);
		$( ".cvalue" ).val(thirdValue);
	});


	var total = 0;
	function CalculateTotal(){
	    $("input:checkbox").each(function(){
	        if($(this).is(":checked")){

	            total += parseFloat($(this).val());
	        }
	    });

	    $("#total").html(total);
		$( ".main-sum" ).val(total);
	}

	$("input:checkbox").change(function(){

		if($(this).is(":checked")){

			$(this).parent().toggleClass("yactive");

	    };


	    total = 0;
	    CalculateTotal();

		//$("#total").html(total * totalKey);

	}).trigger("change");

	// the selector will match all input controls of type :checkbox
	// and attach a click event handler 
	$("input:checkbox").on('click', function() {
	  // in the handler, 'this' refers to the box clicked on
	  var $box = $(this);
	  if ($box.is(":checked")) {
	    // the name of the box is retrieved using the .attr() method
	    // as it is assumed and expected to be immutable
	    $(this).parent().addClass("yactive");
	    var group = "input:checkbox[name='" + $box.attr("name") + "']";
	    // the checked state of the group/box on the other hand will change
	    // and the current value is retrieved using .prop() method
	    $(group).prop("checked", false);
		$(group).parent().removeClass("yactive");
	    $box.prop("checked", true);
	  } else {
	    $box.prop("checked", false);
	  }
	});

//Carousel-2 gost

    $('.gost__slider').owlCarousel({
	    loop:true,
    	center: false,
	    margin:40,
	    responsiveClass:true,
	    autoWidth:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        992:{
	            items:2,
	            nav:true,
	            loop:true
	        },
	        1500:{
	            items:3,
	            nav:true,
	            loop:true
	        }
	    }
	});


	//Carousel-3 reviews

    $('.review__slider').owlCarousel({
	    loop:true,
	    margin:58,
	    responsiveClass:true,
	    autoWidth:true,
	    autoplay:false,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        992:{
	            items:1,
	            nav:true,
	            loop:true
	        },
	        1500:{
	            items:2,
	            nav:true,
	            loop:true
	        }
	    }
	});



	$(".calc__shape_one").click(function() {

    	$(".calc__size_c").addClass("d-none");
    	$(".calc__size_a").addClass("d-none");
	    $("#calc__input_first").val("");
	    $("#calc__input_third").val("");
	    $("#calc__input_second").val("1");
	});

	$(".calc__shape_two").click(function() {

    	$(".calc__size_c").addClass("d-none");
    	$(".calc__size_a").removeClass("d-none");
	    $("#calc__input_first").val("");
	    $("#calc__input_third").val("");
	    $("#calc__input_second").val("1");
	});

	$(".calc__shape_three").click(function() {

    	$(".calc__size_a").addClass("d-none");
    	$(".calc__size_c").removeClass("d-none");
	    $("#calc__input_first").val("");
	    $("#calc__input_third").val("");
	    $("#calc__input_second").val("1");
	});

	$(".calc__shape_four").click(function() {

    	$(".calc__size_a").removeClass("d-none");
    	$(".calc__size_c").removeClass("d-none");
	    $("#calc__input_second").val("1");
	    $("#calc__input_first").val("");
	    $("#calc__input_third").val("");
	});	
	$(".calc__door input").click(function() {

	    $("#calc__input_second").val("1");
	    $("#calc__input_first").val("");
	    $("#calc__input_third").val("");
	});	



});