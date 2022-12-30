// JavaScript Document
// nav fix area
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

 
//nave clild down up
	$(".down").click(function(){
		$(".down").toggleClass("up");})
		
	$(".down").click(function(){
		$("nav ul li ul").toggleClass("up");})

//navebar down up
	 $(".btn-down").click(function(){
	 $(".btn-down").hide(); 
	 $(".btn-up").show(); 
	 $("nav .navebar").stop().slideToggle(1000);})
	
	 $(".btn-up").click(function(){
	 $(".btn-up").hide(); 
	 $(".btn-down").show(); 
	 $("nav .navebar").stop().slideUp(1000);})

//slider
$('.bxslider').bxSlider({
  speed: 1000,
  pause: 5000,
  auto: true,
  pager: true,
  controls:true,
  //autoHover: false,
  autoHover: true,
  tickerHover: true,
  autoControls: false,})

/* For tab starts */
$('ul.tabs li').click(function(){
		
	
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	
	
	 $('.image-view-content').show();
	  $('.list-view-content').hide();
	  $('.image-view-btn').addClass('image-view-active');
	 
	$('.image-view-btn').click(function(){
			 
		 
		 $('.list-view-content').hide();
		 $('.image-view-btn').addClass('image-view-active');
		  $('.list-view-btn').removeClass('list-view-active');
		  $('.image-view-content').show();
});











//back-to-top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}





});
