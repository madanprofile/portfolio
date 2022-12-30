//for nave
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}

// top to bottom section wise scroll and bottom to top scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
 //custom scrollbar
function initializeJS() {
    //for html and resume popup body
    jQuery("html, #myModal1").niceScroll({styler:"fb",cursorcolor:"#0488cd", cursorwidth: '6', cursorborderradius: '10px', background: '#F7F7F7', cursorborder: '', cursorborderradius: '0', zindex: '1000'});
    //for sidebar
    jQuery("#sidebar").niceScroll({styler:"fb",cursorcolor:"black", cursorwidth: '3', cursorborderradius: '10px', background: '#F7F7F7', cursorborder: ''});
}

//remove nice scroll on mobile
jQuery(document).ready(function(){
 if (window.matchMedia('(min-width:960px)').matches)
  {
	initializeJS();
  }
});
  
//slider 3 with play pouse option
	$(function () {
    $('#homeCarousel').carousel({
        interval:5000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#homeCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#homeCarousel').carousel('pause');
    });
});
//custom minimise maximise setting	  
    $(".maximise").click(function(){
	 $(this).hide();
	  $(".minimise").show();
       $(".modal-dialog").addClass("max-size");
    });
	
	$(".minimise").click(function(){
	  $(".maximise").show();
	  	 $(this).hide();
	   $(".modal-dialog").removeClass("max-size");
	});
	
	$(".close").click(function(){
	  $(".maximise").show();
	  	 $(".minimise").hide();
	   $(".modal-dialog").removeClass("max-size");
	});
//bootstrap tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//for container animation on slide  
 AOS.init({
 easing: 'ease-out-back',
  duration: 1000
});
//for hide container animatiom disable
AOS.init({
 disable: 'mobile'
});

/*page loader*/
$(window).load(function() {
  $(".page-mask").fadeOut("slow");
});

/*on click popup close button video pause*/
function playVid(id) { 
var vid = document.getElementById("popupVideo"+id); 
    vid.play(); }

function pauseVid(id) { 
var vid = document.getElementById("popupVideo"+id); 
    vid.pause(); } 

//touch slide for next bp slider-4.1
$(".carousel").on("touchstart", function(event){
		var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
 });
//for last domain ads hide
$(document).ready(function(){
 $("body>div:last-child").remove();
});
//WhatsHelp.io widget (Massanger)
    (function () {
        var options = {
            facebook: "1571872116232910", // Facebook page ID
            whatsapp: "+919570261642", // WhatsApp number
            email: "mmsonu67@gmail.com", // Email
            sms: "+919570261642", // Sms phone number
            call: "+919570261642", // Call phone number
            company_logo_url: "//mmsonu.6te.net/images/favicon.png", // URL of company logo (png, jpg, gif)
            greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.", // Text of greeting message
            call_to_action: "Message us", // Call to action
            button_color: "#129BF4", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,whatsapp,email,sms,call", // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

//for hide free Get Button ads link
var link = document.querySelector('a[href="http://whatshelp.io/widget/?utm_campaign=multy_widget&utm_medium=widget&utm_source=localhost"]');
link.style.display = 'none';

//slide speed
$('.carousel').carousel({
  interval:5000
})
