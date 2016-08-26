$(document).ready(function() {

	// flash message disappear
	setTimeout((function() {
	  return $('.flash-messages').fadeOut('slow');
	}), 3000);


    $('textarea#review-input').keypress(function() {
      $('input#reason-input').show();
      $('select#tag-input').show();
    })


	$('input#company-autoform').keypress(function() {
		$('#about').show();
		$('#company-label').text($(this).val());
		$('#company-label').show()
	})

    $( "#slider" ).slider({
      animate: "slow",
      min: -5,
      max: 5,
      step:1,
      orientation: "horizontal",
      value: "0",
      slide: function(event,ui) {
        showVolume(ui.value)
      }
    });

    $("#slider").on("slidechange", function(){
      var vv = $( "#slider" ).slider( "option", "value" );
      console.log(vv);
      showVolume(vv);
      $("#rating-input").attr("value", vv)
    });		


	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
	    $("#new-review-post").hide();
	  }
	})

})



$(function() {
  $.get( "/api/get_company_names/")
    .done(function(returnedData) {
      var cos = returnedData;
      console.log(cos)
      $( "#company-autoform" ).autocomplete({
        source: cos['companies']
      });
  });
});








// $('form#post-review').submit(function(evt) {
// 	alert("Heyyyy");
// });

function hookup() {
	// company=$("#company-input").val();
	company=$("#company-autoform").val();
	// rating=$("#rating-input").val();
	rating = $( "#slider" ).slider( "option", "value" );
	review=$("#review-input").val();
	reason=$("#reason-input").val();
	tag=$("#tag-input").val();

	console.log(company);

	dataToSend = {
		'company': company,
		'rating': rating,
		'review': review,
		'reason': reason,
		'tag': tag
	}
	console.log(dataToSend)

	$.post( "/api/post_review/", dataToSend)
		.done(function(returnedData) {
			// alert("Returned:" + returnedData);
			location.reload()
	});
}


// function showVolume(shoutVolume) {
//   if (shoutVolume < 0) {
//     $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:red;font-size:28px;"></span>'.repeat(Math.abs(shoutVolume)))
//   }
//   if (shoutVolume == 0) {
//     $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:cyan;font-size:28px;"></span>')
//   }
//   if (shoutVolume > 0) {
//     $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#05cc47;font-size:28px;"></span>'.repeat(shoutVolume))
//   }
// }


function showVolume(shoutVolume) {
  // if (shoutVolume < 0) {
  //   $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:white;font-size:28px;"></span>'.repeat(Math.abs(shoutVolume)));
  // }

  if (shoutVolume == 0) {
    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:black;font-size:28px;"></span>');
	$('#rating-description').text("don't care one way or the other")
  }

  if (shoutVolume > 0) {
    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:black;font-size:28px;"></span>'.repeat(shoutVolume));

    if (shoutVolume == 1) {
	    // $("#post-review").css("background-color", "#d1ffd3");
	    // $("#yaya").css("background-color", "#d1ffd3 !important");
	    $("#new-review-post").css("background-color", "rgba(209,255,211,0.6)");
	    $(".jumbotron").css("background-color", "#d1ffd3");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#d1ffd3;font-size:30px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("it's ok")
    } 

    if (shoutVolume == 2) {
	    // $("#post-review").css("background-color", "#abf0ae");
	    // $("#yaya").css("background-color", "#abf0ae !important");
	    $("#new-review-post").css("background-color", "rgba(171,240,174,0.6)");
	    $(".jumbotron").css("background-color", "#abf0ae");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#abf0ae;font-size:36px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("they're kind of cool")
    } 

    if (shoutVolume == 3) {
	    // $("#post-review").css("background-color", "#8cdc90");
	    // $("#yaya").css("background-color", "#8cdc90 !important");
	    $("#new-review-post").css("background-color", "rgba(140,220,144,0.6)");	    
	    $(".jumbotron").css("background-color", "#8cdc90");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#8cdc90;font-size:42px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i really like them!")
    } 

    if (shoutVolume == 4) {
	    // $("#post-review").css("background-color", "#73cd77");
	    // $("#yaya").css("background-color", "#73cd77 !important");
	    $("#new-review-post").css("background-color", "rgba(115,205,119,0.6)");	    
	    $(".jumbotron").css("background-color", "#73cd77");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#73cd77;font-size:48px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i would absolutely recommend using this company")
    } 

    if (shoutVolume == 5) {
	    // $("#post-review").css("background-color", "#5fc264");
	    // $("#yaya").css("background-color", "#5fc264 !important");
	    $("#new-review-post").css("background-color", "rgba(95,194,100,0.6)");	    
	    $(".jumbotron").css("background-color", "#5fc264");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#5fc264;font-size:58px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i fucking love this company")
    }
  }

  if (shoutVolume < 0) {
    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:black;font-size:28px;"></span>'.repeat(Math.abs(shoutVolume)));

    if (shoutVolume == -1) {
	    // $("#post-review").css("background-color", "#ffd3c6");
	    $("#yaya").css("background-color", "rgba(255,211,198,0.6) !important");
	    $("#new-review-post").css("background-color", "rgba(255,211,198,0.6)");
	    $(".jumbotron").css("background-color", "#ffd3c6");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#ffd3c6;font-size:30px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("it's not ok")
    } 

    if (shoutVolume == -2) {
	    // $("#post-review").css("background-color", "#ffbaa6");
	    $("#yaya").css("background-color", "rgba(255,186,166, 0.6) !important");
	    $("#new-review-post").css("background-color", "rgba(255,186,166, 0.6)");		 	    
	    $(".jumbotron").css("background-color", "#ffbaa6");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#ffbaa6;font-size:36px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i don't like using them")
    } 

    if (shoutVolume == -3) {
	    // $("#post-review").css("background-color", "#ff825d");
	    $("#yaya").css("background-color", "rgba(255,130,93, 0.6) !important");
	    $("#new-review-post").css("background-color", "rgba(255,130,93, 0.6)");		 	    
	    $(".jumbotron").css("background-color", "#ff825d");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#ff825d;font-size:42px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i haven't had very good experiences...")
    } 

    if (shoutVolume == -4) {
	    // $("#post-review").css("background-color", "#ff754d");
	    $("#yaya").css("background-color", "rgba(255,117,77, 0.6) !important");
	    $("#new-review-post").css("background-color", "rgba(255,117,77, 0.6)");		 	    
	    $(".jumbotron").css("background-color", "#ff754d");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#ff754d;font-size:48px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i definitely would NOT recommend")
    } 

    if (shoutVolume == -5) {
	    // $("#post-review").css("background-color", "#ff3a00");
	    $("#yaya").css("background-color", "rgba(255,58,0, 0.6) !important");
	    $("#new-review-post").css("background-color", "rgba(255,58,0, 0.6)");		 	    
	    $(".jumbotron").css("background-color", "#ff3a00");
	    $("#slider-img").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="color:#ff3a00;font-size:58px;"></span>'.repeat(Math.abs(shoutVolume)));
		$('#rating-description').text("i fucking hate this company.")
    }
  }

}

// good colors:
// #d1ffd3
// #abf0ae
// #8cdc90
// #73cd77
// #5fc264


// bad colors:
// #ffd3c6
// #ffbaa6
// #1008764
// #ff754d
// #ff3a00
