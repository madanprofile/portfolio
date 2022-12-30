$(document).ready(function(){
   // Create a clone of the menu, right next to original.
$('.fix').addClass('original').clone().insertAfter('.fix').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

})

$(document).ready(function(){
$('#slider1').bxSlider({
  speed: 1000,
  pause: 4000,
  auto: true,
  pager: true,
  controls:true,
  autoHover: true,
  tickerHover: true,
  autoControls: false,
});

$('#slider2').bxSlider({
  auto: true,
  autoControls: true,
});

$('#slider3').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true,
});

$('#slider4').bxSlider({
  auto: true,
  mode: 'fade',
  slideMargin: 5
});

$('.slider5').bxSlider({
	auto: true,
    slideWidth: 300,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 3,
    slideMargin: 10
  });

var slider = $('#slider6').bxSlider({
  mode: 'vertical',
});

$('#slider-next').click(function(){
  slider.goToNextSlide();
  return false;
});

$('#slider-count').click(function(){
  var count = slider.getSlideCount();
  alert('Slide count: ' + count);
  return false;
});

$('#slider7').bxSlider({
  minSlides: 4,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10,
  ticker: true,
  speed: 6000
});

$('#slider8').bxSlider({
  mode: 'horizontal',
  auto:true,
  useCSS: false,
  infiniteLoop: false,
  hideControlOnEnd: true,
  easing: 'easeOutElastic',
  speed: 2000
});

$('#slider9').bxSlider({
  pagerCustom: '#bx-pager',
  auto: true,
  autoControls: false,
});


});



 /* Start Accordion 1 */


  $(document).ready(function() {
	  $('.level2 .accord-content-sub4').first().show();
	  $(".accordion4 .accord-header4").removeClass('minus-img').toggleClass('plus-img');
	   $(".level2.submenu1 .accord-header-sub4").removeClass('sub-minus');
	 
	  
	  
	  $(".accordion4 .accord-header4").click(function() {
		  $(this).toggleClass('minus-img');
		   $(this).next().find(".accord-header-sub4").removeClass('sub-minus');	 
		  $(this).next().find(".accord-header-sub4").first().addClass('sub-minus');	 		  
		   $(this).next("div").slideToggle("slow");
		    $(this).next("div").find('.accord-content-sub4').slideUp();			
		   $(this).next("div").find('.accord-content-sub4').first().slideDown();		  
		   $("accord-header-sub4").removeClass('sub-minus');		    
		   });
		   
		  
		   /* Copy and paste this chunk of code for every additional menu starts */
		    $(".level2.submenu1 .accord-header-sub4").click(function() {
				  $(".level2.submenu1 .accord-header-sub4").removeClass('sub-minus');				
				  $('.level2.submenu1').find('.accord-content-sub4').slideUp();	
		   })
		   /* Copy and paste this chunk of code for every additional menu ends */
		   
		   /* Copy and paste this chunk of code for every additional menu starts */
		   $(".level2.submenu2 .accord-header-sub4").click(function() {
				$(".level2.submenu2 .accord-header-sub4").removeClass('sub-minus');
				$('.level2.submenu2').find('.accord-content-sub4').slideUp();
		   })
		   /* Copy and paste this chunk of code for every additional menu ends */
		   
		  
		   
		    $(".level2.submenu4 .accord-header-sub4").click(function() {
				$(".level2.submenu4 .accord-header-sub4").removeClass('sub-minus');
				$('.level2.submenu4').find('.accord-content-sub4').slideUp();
		   })
		   
		   
		   $(".level2 .accord-header-sub4").click(function() {
		   $(this).toggleClass('sub-minus');				 
		   $(this).next("div").slideToggle("slow");		    
		   })
		   
		   
		   
		   $(".accordion4 .accord-header4").first().click();
			 
		  
	 
  });

 /* End Accordion 1 */


 /* Start Accordion 2 */


$(document).ready(function() {
	  $('.level3 .accord-content-sub5').first().show();
	  $(".accordion5 .accord-header5").removeClass('minus-img1').toggleClass('plus-img1');
	   $(".level3.submenu2 .accord-header-sub5").removeClass('sub-minus1');
	 
	  
	  
	  $(".accordion5 .accord-header5").click(function() {
		  $(this).toggleClass('minus-img1');
		   $(this).next().find(".accord-header-sub5").removeClass('sub-minus1');	 
		  $(this).next().find(".accord-header-sub5").first().addClass('sub-minus1');	 		  
		   $(this).next("div").slideToggle("slow");
		    $(this).next("div").find('.accord-content-sub5').slideUp();			
		   $(this).next("div").find('.accord-content-sub5').first().slideDown();		  
		   $("accord-header-sub5").removeClass('sub-minus1');		    
		   });
		   
		  
		   /* Copy and paste this chunk of code for every additional menu starts */
		    $(".level3.submenu2 .accord-header-sub5").click(function() {
				  $(".level3.submenu2 .accord-header-sub5").removeClass('sub-minus1');				
				  $('.level3.submenu2').find('.accord-content-sub5').slideUp();	
		   })
		   /* Copy and paste this chunk of code for every additional menu ends */
		   
		   /* Copy and paste this chunk of code for every additional menu starts */
		   $(".level3.submenu3 .accord-header-sub5").click(function() {
				$(".level3.submenu3 .accord-header-sub5").removeClass('sub-minus1');
				$('.level3.submenu3').find('.accord-content-sub5').slideUp();
		   })
		   /* Copy and paste this chunk of code for every additional menu ends */
		   
		  
		   
		    $(".level3.submenu5 .accord-header-sub5").click(function() {
				$(".level3.submenu5 .accord-header-sub5").removeClass('sub-minus1');
				$('.level3.submenu5').find('.accord-content-sub5').slideUp();
		   })
		   
		   
		   $(".level3 .accord-header-sub5").click(function() {
		   $(this).toggleClass('sub-minus1');				 
		   $(this).next().css('background-color','#93a793');				
		   $(this).next("div").slideToggle("slow");		    
		   })
		   
		   
		   
		   $(".accordion5 .accord-header5").first().click();
			 
		  
	 
  });

 /* End Accordion 2 */

  /* start Video Setting */

$(document).ready(function(){
 
$(".link-menu").click(function(e){ /* this is link */		 
		$(".acc-menu").toggle();
		 e.stopPropagation();
		
		})
		$(".acc-menu").click(function(e){
    e.stopPropagation();
	 
});


$(".size-m").click(function(e){
    e.stopPropagation();
	$(".size-m").removeClass('current-link');
	$(this).addClass('current-link');
});


		$(document).click(function(){
			  
    $(".acc-menu").hide();
	 
});

 });


 /* end Video Setting */

 /* Start PopUp */

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-43981329-1']);
	_gaq.push(['_trackPageview']);
	(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
	})();
	//function to validate empty field
function check_empty(){
if(document.getElementById('name').value == "" 
|| document.getElementById('email').value == "" 
||document.getElementById('msg').value == "" ){
alert ("Fill All Fields !");
}
	else {  
	document.getElementById('form').submit();  
	alert ("Form submitted successfully...");
	}
}

//function to display Popup
function div_show(){ 
document.getElementById('abc').style.display = "block";
}

//function to hide Popup
function div_hide(){ 
document.getElementById('abc').style.display = "none";
}

 /* End PopUp */


