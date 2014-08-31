<?php
// PHP Initialization
ini_set         ('display_errors', 1);
error_reporting (E_ALL | E_STRICT);

// Open the DB
$dbhost		= 'localhost';
$dbuser        = 'swordfix';
$dbpass        = 'swordfix';
$dbname        = 'SWORDFIX';

try {
    $db = new PDO ("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $db->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    header ("HTTP/1.1 500 Server Error");
    die    ("HTTP/1.1 500 Server Error: Database Unavailable ({$e->getMessage()})");
}
print "Database connection setup.";

$users = $db->query ("SELECT UID, USERNAME, EMAIL, DATEOFJOINING FROM USERS");

foreach($users as $user){
    print "Userid: "+$user['UID'];
    print $user['USERNAME'].$user['EMAIL'];
}

?>