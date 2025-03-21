<?php
require_once '/Users/abdullahbarham/Downloads/website-aura-main/db_connection.php'; // Adjust the path to your config file

header('Content-Type: application/json');

// Log the start of the script
error_log("Starting database connection test");

$sql = "SELECT * FROM resources LIMIT 1";
$result = $conn->query($sql);

if ($result === false) {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to connect to the database or fetch data', 'error' => $conn->error]);
    // Log the SQL error for debugging
    error_log("SQL Error: " . $conn->error);
    exit();
}

// Log successful query execution
error_log("Query executed successfully");

if ($result->num_rows > 0) {
    echo json_encode(['message' => 'Database connection successful and table accessible']);
    // Log the presence of data
    error_log("Data found in the table");
} else {
    echo json_encode(['message' => 'Database connection successful but table is empty']);
    // Log the absence of data
    error_log("No data found in the table");
}

$conn->close();

// Log the end of the script
error_log("Database connection test completed");
?>
