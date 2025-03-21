<?php
require_once '/Users/abdullahbarham/Downloads/website-aura-main/db_connection.php'; // Adjust the path to your config file

header('Content-Type: application/json');

$sql = "SELECT * FROM resources ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result === false) {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to fetch posts', 'error' => $conn->error]);
    // Log the SQL error for debugging
    error_log("SQL Error: " . $conn->error);
    exit();
}

if ($result->num_rows > 0) {
    $posts = [];
    while($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
    echo json_encode($posts);
} else {
    echo json_encode(['message' => 'No posts found']);
}

$conn->close();
?>
