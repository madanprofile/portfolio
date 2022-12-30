<!DOCTYPE html>
   <head>
      <meta charset="utf-8">
      <title>All web design video tutorial</title>
      <meta name="author" content="mmsonu.6te.net">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <?php include("inclueds/head-links.php"); ?>
	</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">
<div class="pg-loade"></div>
 <?php $activem="1"; include("inclueds/top-menu.php");?>
 <!-- html5 animated header -->
<div id="particles-js"></div>
<div id="services"><header><img src="images/ipad.png" alt="demo" width="300" /></header></div>

<div class="clearfix"></div>
<div class="wrapper">
<div class="container">
    <div class="row">
    <div class="col-md-12 services"><h3>Service</h3></div>
      <div class="col-md-8">
        <video id="myVideo" src="https://flashuser.net/_html5videoplayer/media/1/main/02.mp4" poster="images/2.jpg" preload="none" playsinline webkit-playsinline>
        </video>
      </div>
      
      <div class="col-md-4 video-srch">
       <div><h4>Related Videos</h4><input type="text" placeholder="Search..." /><i class="fa fa-search"></i></div>
       <div class="all-video">
        <div><a href="html.php"><img src="images/1.jpg" /><span>Trigonometric Ratios | Maths | IIT-JEE | CBSE</span></a></div>
        <div><a href="html.php"><img src="images/1.jpg" /><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</span></a></div>
        <div><a href="html.php"><img src="images/1.jpg" /><span>efgh</span></a></div>
        <div><a href="html.php"><img src="images/1.jpg" /><span>agtc</span></a></div>
        <div><a href="html.php"><img src="images/1.jpg" /><span>aghr</span></a></div>
       </div>
      </div>
      
    </div>
  </div>


<div id="contact"></div>
<div class="contact">
 <div class="container">
  <div class="row">
   <div class="col-md-12">
    <h1>Let´s Talk</h1>
    <h4>Visit Us, Give us a call, write us an email or fill out the form below.</h4>
   </div>
    <form action="" method="post">
    <div class="col-md-4">
     <input type="text" name="name" placeholder="Full Name" required>
     <input type="text" name="phone" placeholder="Phone Number" pattern="[7|8|9][0-9]{9}" minlength="10" maxlength="10" required>
     <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Email Id" required>
    </div>
    <div  class="col-md-8">
     <textarea name="comment" placeholder="Message"></textarea>
    </div>
    <div class="col-md-4">
     <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
  </div>
 </div>
</div>


</div>
 <?php include("inclueds/footer.php"); ?>
 <script>
	$(window).load(function(){
		var windowsizenew = $(window).width();
			if (windowsizenew < 900){
				 $('html, body').stop(true).delay(1000).animate({ scrollTop:0 }, 2000);
				}else{
					$('html, body').stop(true).delay(1000).animate({ scrollTop:620 }, 2000);
				}
	});
</script>
</body>
</html>
