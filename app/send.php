<?php

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

	require 'PHPMailer/PHPMailerAutoload.php';

	$req = json_decode(file_get_contents('php://input'));

	$setting = 	[
					'host' => 'mail.ithosting.com.au',
					'port' => 587,
					'user' => 'livesupport@hub3c.com',
					'pass' => 'zxasqw12',
					'name' => 'Hub3c Live Support'
				];

	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->SMTPDebug = 0;
	$mail->Debugoutput = 'html';
	$mail->Host = $setting['host'];
	$mail->Port = $setting['port'];
	$mail->SMTPAuth = true;
	$mail->Username = $setting['user'];
	$mail->Password = $setting['pass'];
	$mail->setFrom($setting['user'], $setting['name']);
	$mail->addAddress('partnerservices@hub3c.com', $req->contact." from ".$req->business);
	$mail->Subject = 'Global Partner Program | Register as '.$req->registerAs;

	$message = file_get_contents('views/parsial/registermail.html');
	$message = str_replace('%registerAs%', $req->registerAs, $message);
	$message = str_replace('%business%', $req->business, $message);
	$message = str_replace('%contact%', $req->contact, $message);
	$message = str_replace('%email%', $req->email, $message);
	$message = str_replace('%country%', $req->country, $message);
	$message = str_replace('%phone%', $req->phone, $message);

	$mail->Body = html_entity_decode($message);
	$mail->IsHTML(true);  

	if (!$mail->send()) {
	    echo json_encode(['status' => false, 'message' => "Registration failed. Mailer Error: " . $mail->ErrorInfo]);
	} else {
	    echo json_encode(['status' => true, 'message' => "Registration success. Our team will contact you soon."]);
	}

?>