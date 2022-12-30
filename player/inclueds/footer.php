<?php
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$to = "mmsonu67@gmail.com";
$headers = "From: $name<$email>";
$message="From :- $name \n\nEmail :- $email \n\nPhone :- $phone \n\nMessage :- $comment \n\n";
If(mail($to, $name, $message, $headers))
{
echo "<ol class='sent-mail'>Email sent :- Thanks for contacting us, we will get back to you shortly.</ol>";
}
else
{
echo"<ol class='sent-mail alert'>Email not sent :-please try again later</ol>";
}
}
?>

<footer>
 <div class="container">
   <p>© mmsonu.6te.net. All Rights Reserved.</p>
    <ul class="pull-right">
    <li><a href="https://www.facebook.com/mmsonu67" target="_new" class="fa fa-facebook" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"></a></li>
    <li><a href="https://twitter.com/mmsonu67" target="_new" class="fa fa-twitter" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"></a></li>
    <li><a href="https://plus.google.com/105775441551462783925" target="_new" class="fa fa-google-plus" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google+"></a></li>
    <li><a href="https://www.linkedin.com/in/madan-mohan-15b207156/" target="_new" class="fa fa-linkedin" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin"></a></li>
    <li><a href="https://www.instagram.com/mmsonu67/" target="_new" class="fa fa-instagram" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"></a></li>
	</ul> 
   </div>
</footer>
<a href="#home" id="back-to-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top"><i class="fa fa-arrow-circle-up fa-6"></i></a>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://use.fontawesome.com/5640d6a9fc.js"></script>
  <!--for header-->
  <script src='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
  <script src="<?=baseUrl?>js/player.js"></script> 
  <script src="<?=baseUrl?>js/jquery.visible.min.js"></script> 
  <script src="<?=baseUrl?>js/animation.js"></script> 
