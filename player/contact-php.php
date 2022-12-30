<?php
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$to = "mmsonu67@gmail.com";
$headers = "From: $name<$email>";
$message="From :- $name \n\nPhone :- $phone \n\nEmail :- $email \n\nMessage :- $comment \n\n";
If(mail($to, $message, $headers))
{
echo "<ol>Email sent :- Thanks for contacting us, we will get back to you shortly.</ol>";
}
else
{
echo"please try again later";
}
}
?>