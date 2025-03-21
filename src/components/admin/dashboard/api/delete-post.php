<?php
header('Content-Type: application/json');

include 'db_connection.php';

// Enable error logging
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/php-error.log');

try {
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];

    // Ensure the parameter is an integer
    $id = (int)$id;

    // Log the received data for debugging
    error_log('Received data: ' . print_r($data, true));

    $sql = "DELETE FROM resources WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception('Failed to prepare statement: ' . $conn->error);
    }

    // Log the types and values being bound
    error_log('Binding parameter: ' . print_r([$id], true));

    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Post deleted successfully!']);
    } else {
        throw new Exception('Failed to delete post: ' . $stmt->error);
    }
} catch (Exception $e) {
    error_log('Error: ' . $e->getMessage()); // Log the error
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $e->getMessage()]);
}

$conn->close();
?>
