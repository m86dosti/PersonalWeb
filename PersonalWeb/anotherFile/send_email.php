<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mohammad1386dostipor@gmail.com";
    $subject = "پیام جدید از فرم تماس";
    $body = "نام: $name\nایمیل: $email\n\nپیام:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p style='text-align: center; color: green;'>پیام شما با موفقیت ارسال شد!</p>";
    } else {
        echo "<p style='text-align: center; color: red;'>خطا در ارسال پیام. لطفاً دوباره تلاش کنید.</p>";
    }
}
?>