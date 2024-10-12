<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy thông tin từ form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Địa chỉ email bạn muốn nhận thông tin
    $to = "hungpnh96@gmail.com"; // Thay bằng email của bạn
    $subject = "Lời chúc từ " . $name;
    
    // Nội dung email
    $body = "Tên: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Lời chúc:\n$message\n";

    // Header để thiết lập email từ đâu gửi đi (giúp tránh spam folder)
    $headers = "From: $email";

    // Gửi email
    if (mail($to, $subject, $body, $headers)) {
        echo "Lời chúc của bạn đã được gửi thành công!";
    } else {
        echo "Có lỗi xảy ra khi gửi lời chúc, vui lòng thử lại.";
    }
} else {
    echo "Yêu cầu không hợp lệ!";
}
?>
