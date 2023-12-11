<?php
$username = "svikram12@gmail.com";
$hash = "c63e93bb9accb62afdeea7c69731ef4605fde266e43f4bd60c3ab75ac8aa3ea4";
$test = "0";
$sender = "APPVAL";
$template_id = "1407168916356867355";

$template_data = array(
    "inputtype" => "text",
    "maxlength" => "6"
);

$message_data = array(
    "text" => json_encode($template_data)
);

// Get the number from the query parameters
$number = $_GET['number'];
$otp = $_GET['otp'];

if (!empty($number)) {
    $message = "$otp is your OTP for WEVALET login. OTP is valid for 2 min. Appcubator Enterprise Private Limited";
    $message = urlencode($message);
    
    $api_url = 'https://api.textlocal.in/send/';
    
    $data = array(
        'username' => $username,
        'hash' => $hash,
        'template_id' => $template_id,
        'sender' => $sender,
        'numbers' => $number, // Use the provided number
        'message' => $message,
        'test' => $test,
    );

    $ch = curl_init($api_url);
    
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $result = curl_exec($ch);
    
    if (curl_errno($ch)) {
        echo 'cURL error: ' . curl_error($ch);
    }
    
    curl_close($ch);
    
    echo $result;
} else {
    echo 'Please provide a valid phone number as a query parameter (e.g., ?number=9428893063)';
}
?>