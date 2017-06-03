<?php

class DatabaseAccess {
	private $_databaseUrl;
	private $_username;
	private $_password;
	private $_dbName;
	private $_connection;

	public function __construct($databaseUrl, $dbName, $username, $password) {
		$this->_databaseUrl = $databaseUrl;
		$this->_username = $username;
		$this->_password = $password;
		$this->_dbName = $dbName;
	}

	public function executeQuery($query) {
		$connection = mysql_connect($this->_databaseUrl, $this->_username, $this->_password);

		if ($connection){
			$database = mysql_select_db($this->_dbName, $connection);

			if($database) {
				mysql_query('SET character_set_results=utf8');
				mysql_query('SET character_set_client=utf8');
				mysql_query('SET names utf8');

				$queryResponse = mysql_query($query);

				if(!$queryResponse){
					echo(mysql_error($connection));
				}

				$resultItems = array();
				
				while(is_resource($queryResponse) && $item = mysql_fetch_row($queryResponse)) {
					$resultItems[] = $item;
				}

        		return  $resultItems;
			}
			else {
				die("Connection to DB could not be established");
			}
		}
		else {
			die("Connection could not be established");
		}
	}
}
