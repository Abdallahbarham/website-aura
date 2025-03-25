<?php
include 'db_connection.php'; // Include your database configuration file

$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$excerpt = $data['excerpt'];
$category = $data['category'];
$tags = $data['tags'];
$readTime = $data['readTime'];
$imageUrl = $data['imageUrl'];
$content = $data['content'];

$query = "INSERT INTO resources (title, excerpt, category, tags, readTime, imageUrl, content) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("sssssss", $title, $excerpt, $category, $tags, $readTime, $imageUrl, $content);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "id" => $stmt->insert_id]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>