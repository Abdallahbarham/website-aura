<?php
$servername = "127.0.0.1";
$username = "root2";
$password = "123";
$dbname = "faei_website";

// Enable error reporting
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    error_log('Connection failed: ' . $conn->connect_error); // Log the error
    die("Connection failed: " . $conn->connect_error);
}
?>
