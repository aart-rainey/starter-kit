<?
if(!empty($_POST['sendform'])) {

	require 'composer/phpmailer/phpmailer/PHPMailerAutoload.php';

	// ========= SET VARS HERE ========//
	$site_name = "";
	//$send_to = "";
	$send_to = "aart.rainey@gmail.com";

	$values = ["email" => $_POST['email'], "name" =>  $_POST['name'], "message" => $_POST['text']];

	// ============= END =============//

	if(!empty($values['email']) && !empty($values['name']) && !empty($values['message'])){
		//Create a new PHPMailer instance
		$mail = new PHPMailer;
		//Set who the message is to be sent from
		$mail->setFrom($values['email'], $values['name']);
		//Set an alternative reply-to address
		//$mail->addReplyTo('aart.rainey@gmail.com', 'First Last');
		//Set who the message is to be sent to
		$mail->addAddress($send_to, 'Admin '.$site_name);
		//Set the subject line
		$mail->Subject = "Support Message from ".$site_name.":";
		//Read an HTML message body from an external file, convert referenced images to embedded,
		//convert HTML into a basic plain-text alternative body
		$mail->msgHTML($values['message']);
		//Replace the plain text body with one created manually
		$mail->AltBody = 'This is a plain-text message body';
		//Attach an image file
		//	$mail->addAttachment('images/phpmailer_mini.png');

		//send the message, check for errors
		if (!$mail->send()) {
			echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
			echo "1";
		}
	}
}
