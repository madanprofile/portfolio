<?php
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$comment = $_POST['comment'];
$to = "mmsonu67@gmail.com";
$headers = "From: $name<$email>";
$message="From: $name \n\nEmail: $email \n\n Subject: \n\n $Comments $comments";
If(mail($to, $subject, $message, $headers))
{
echo "Email sent";
}
else
{
echo"please try again later";
}
}
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
<form action="" method="post">
<p>Name<br>
<input type="text" name="name" id=""></p>
<p>Email<br>
<input type="text" name="email" id=""></p>
<p>Subject<br>
<input type="text" name="subject" id=""></p>
<p>Comment<br>
<textarea type="text" name="comment" id="" cols="30" rows="10"></textarea></p>
<p><input type="submit" value="Send Email" name="submit"></p>
</form>
</body>
</html>
