
/*start download button*/
$(document).ready(function(){
$(".year").click(function(e){
		 
		$(".year ul li").toggle(1000);
		 e.stopPropagation();
		
		})
		$(".year ul li").click(function(e){
    e.stopPropagation();
});
		$(document).click(function(){
			  
    $(".year ul li").hide();
	 
});
$(".year ul li").click(function(e){
		 
		$(".year ul li").hide();
		 e.stopPropagation();
		
		})

$(".download").click(function(e){
		 
		$(".download ul li").toggle(1000);
		 e.stopPropagation();
		
		})
		$(".download ul li").click(function(e){
    e.stopPropagation();
});
		$(document).click(function(){
			  
    $(".download ul li").hide();
	
});
$(".download ul li").click(function(e){
		 
		$(".download ul li").hide();
		 e.stopPropagation();
		
		})	 
});
/*end download button*/

$(document).ready(function(){
$('.vid').click(function(){
$('.vid1').show(2000);
});

});
