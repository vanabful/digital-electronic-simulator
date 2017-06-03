<?php

require_once("php/saveEmail.php");

class API{
	
	public static function processRequest(){
		$action = API::getParametarValue("action");
		
		switch($action){
			case "saveEmail":
				return API::saveEmail();
			case "getEmail":
				return API::getEmail();
			default:
				return "Unknown action!";
		}
	}
	
	private static function saveEmail(){
		$email = API::getParametarValue("email");
		Email::insertContent($email);
		echo json_encode(array('success' => true));
	}

	private static function getContent() {
		$data = Data::fetchContent();

		if($data) {
			echo $data;
		}else {
			die(json_encode(array('success' => false)));
		}
	}
	
	public static function sendErrorAndDie($message){
		header("HTTP/1.1 400 Invalid Request");
		
		die(json_encode(array(
			"message" => $message
		)));
	}
	
	private static function getParametarValue($key){
		return isset($_REQUEST[$key]) ? $_REQUEST[$key] : null;
	}
}

echo(API::processRequest());
?>