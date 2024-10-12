<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Tên không hợp lệ ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email không hợp lệ ";
} else {
    $email = $_POST["email"];
}

// MSG Guest
if (empty($_POST["guest"])) {
    $errorMSG .= "Subject không hợp lệ ";
} else {
    $guest = $_POST["guest"];
}


// MSG Event
if (empty($_POST["event"])) {
    $errorMSG .= "Subject không hợp lệ ";
} else {
    $event = $_POST["event"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Lời chúc không hợp lệ ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "hungpnh96@gmail.com";
$Subject = "Lời chúc từ " . $name;
// Header để thiết lập email từ đâu gửi đi (giúp tránh spam folder)
$headers = "From: $email";


// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "guest: ";
$Body .= $guest;
$Body .= "\n";
$Body .= "event: ";
$Body .= $event;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// Gửi email
if($errorMSG != ""){
	echo($errorMSG );
}
else if (mail($EmailTo, $Subject, $Body, $headers)) {
	echo "Lời chúc của bạn đã được gửi thành công!";
} else {
	echo "Có lỗi xảy ra khi gửi lời chúc, vui lòng thử lại.";
}
?>