<?php
@$id=$_REQUEST["id"];
 if($id==1 || !isset($_REQUEST["id"])){ ?>
<div class="item active">
       <div class="row">
	    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-9.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal3"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
  		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-10.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal4"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
  		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-11.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal5"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
  		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-12.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal6"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
 </div>
</div>

<a class="left carousel-control" href="#thumbcarousel" role="button" data-slide="prev">
         <span class="fa fa-angle-left"></span>
        </a>
        <a class="right carousel-control" href="#thumbcarousel" role="button" data-slide="next">
         <span class="fa fa-angle-right"></span>
        </a>

<?php  } else if($id==2){ ?>

	<div class="item active">
       <div class="row">
	    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-9.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal3"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
  		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-10.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal4"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
  		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/sm-portfolio-11.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal5"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
  		<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div class="portfolio bounceIn animatable">
         <div class="portfolio-item">
          <img src="images/portfolio-6.jpg" alt="project img">
          <a href="0#" class="portfolio-link" data-toggle="modal" data-target="#myModal6"><span><i  class="fa fa-search"></i></span></a>
     </div>
   </div>
  </div>
 </div>
</div>

<a class="left carousel-control" href="#thumbcarousel" role="button" data-slide="prev">
         <span class="fa fa-angle-left"></span>
        </a>
        <a class="right carousel-control" href="#thumbcarousel" role="button" data-slide="next">
         <span class="fa fa-angle-right"></span>
        </a>

<?php } ?>