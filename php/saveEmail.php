<?php

require_once("DatabaseAccess.php");

class Email {
    public $email;

    public function __construct($email) {
		$this->email = $email;
	}

    public static function insertContent($email){
		$dbAccess = self::getDbAccess();
	
		$dbAccess->executeQuery("INSERT INTO emailData (email) VALUES ('$email');");
		
	}

	public static function fetchContent() {
		$dbAccess = self::getDbAccess();

		$rows = $dbAccess->executeQuery("SELECT * FROM `emailData` ORDER BY `ID` DESC LIMIT 1");

		if(isset($rows[0])) return $rows[0][1];
	}

    private static function getDbAccess(){
		return new DatabaseAccess(
			"localhost",  //lokacija do DB servera
			"BrajcicVana", //Ime baze PrezimeIme
			"BrajcicVana", //username PrezimeIme
			"BrajcicVana1" //password PrezimeIme1
		);
	}
}