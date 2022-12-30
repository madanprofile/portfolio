$(document).ready(function(){
$('.bxslider').bxSlider({
  speed: 1000,
  pause: 4000,
  auto: true,
  pager: false,
  controls:true,
  autoHover: true,
  tickerHover: false,
  autoControls: false,

});
});

$(document).ready(function(){
  $('.slider4').bxSlider({
    slideWidth: 300,
	pager: false,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });
});

