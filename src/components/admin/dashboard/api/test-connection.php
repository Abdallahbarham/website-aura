<?php
header('Content-Type: application/json');

include 'db_connection.php';

// Enable error logging
ini_set('log_errors', 1);

try {
    // Verify database connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }

    // Verify table structure
    $tableCheck = $conn->query("DESCRIBE resources");
    if (!$tableCheck) {
        throw new Exception('Table "resources" does not exist or has incorrect structure.');
    }

    // Insert test data into the resources table
    $sql = "INSERT INTO resources (title, excerpt, category, readTime, imageUrl, content) VALUES ('Test Title', 'Test Excerpt', 'Test Category', '5 min', 'http://example.com/image.jpg', 'Test Content')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Test data inserted successfully!']);
    } else {
        throw new Exception('Failed to insert test data: ' . $conn->error);
    }
} catch (Exception $e) {
    error_log('Error: ' . $e->getMessage()); // Log the error
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $e->getMessage()]);
}

$conn->close();
?>
