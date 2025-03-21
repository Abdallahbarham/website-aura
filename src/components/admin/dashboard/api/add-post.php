<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include 'db_connection.php';

// Enable error logging
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/php-error.log');

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        throw new Exception('No data received');
    }

    $title = $data['title'] ?? null;
    $excerpt = $data['excerpt'] ?? null;
    $category = $data['category'] ?? null;
    $tags = $data['tags'] ?? null;
    $readTime = $data['readTime'] ?? null;
    $imageUrl = $data['imageUrl'] ?? null;
    $content = $data['content'] ?? null;

    if (!$title || !$excerpt || !$category || !$readTime || !$imageUrl || !$content) {
        throw new Exception('Missing required fields');
    }

    // Ensure all parameters are strings
    $title = (string)$title;
    $excerpt = (string)$excerpt;
    $category = (string)$category;
    $tags = (string)$tags;
    $readTime = (string)$readTime;
    $imageUrl = (string)$imageUrl;
    $content = (string)$content;

    // Log the received data for debugging
    error_log('Received data: ' . print_r($data, true));

    $sql = "INSERT INTO resources (title, excerpt, category, readTime, imageUrl, content) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception('Failed to prepare statement: ' . $conn->error);
    }

    // Log the types and values being bound
    error_log('Binding parameters: ' . print_r([$title, $excerpt, $category, $readTime, $imageUrl, $content], true));

    $stmt->bind_param("ssssss", $title, $excerpt, $category, $readTime, $imageUrl, $content);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Post added successfully!']);
    } else {
        throw new Exception('Failed to add post: ' . $stmt->error);
    }
} catch (Exception $e) {
    error_log('Error: ' . $e->getMessage()); // Log the error
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $e->getMessage()]);
}

$conn->close();
?>
