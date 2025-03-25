<?php
require_once '/Users/abdullahbarham/Downloads/website-aura-main/db_connection.php'; // Adjust the path to your config file

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

// Log the raw input data for debugging
error_log("Raw Input Data: " . file_get_contents('php://input'));

$title = $data['title'];
$excerpt = $data['excerpt'];
$category = $data['category'];
$tags = $data['tags'];
$readTime = $data['readTime'];
$imageUrl = $data['imageUrl'];
$content = $data['content'];

// Log the parsed input data for debugging
error_log("Parsed Input Data: " . print_r($data, true));

// Validate input data
if (empty($title) || empty($excerpt) || empty($category) || empty($tags) || empty($readTime) || empty($imageUrl) || empty($content)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid input data']);
    exit();
}

$sql = "INSERT INTO resources (title, excerpt, category, tags, readTime, imageUrl, content) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to prepare statement', 'error' => $conn->error]);
    error_log("Prepare Statement Error: " . $conn->error);
    exit();
}

// Log the bind parameters for debugging
error_log("Bind Parameters: title=$title, excerpt=$excerpt, category=$category, tags=$tags, readTime=$readTime, imageUrl=$imageUrl, content=$content");

$stmt->bind_param("sssssss", $title, $excerpt, $category, $tags, $readTime, $imageUrl, $content);

// Log the SQL query for debugging
error_log("Executing SQL: " . $sql);

if ($stmt->execute()) {
    echo json_encode(['message' => 'Post created successfully']);
    error_log("Post created successfully");
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to create post', 'error' => $stmt->error]);
    error_log("Execute Statement Error: " . $stmt->error);
}

$stmt->close();
$conn->close();
?>
