<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include 'db_connection.php';

try {
    $sql = "SELECT id, title, excerpt, category, tags, readTime, imageUrl, content FROM resources";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $posts = [];
        while ($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }
        echo json_encode(['status' => 'success', 'data' => $posts]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No posts found']);
    }
} catch (Exception $e) {
    error_log('Failed to fetch posts: ' . $e->getMessage()); // Log the error
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch posts: ' . $e->getMessage()]);
}

$conn->close();
?>
