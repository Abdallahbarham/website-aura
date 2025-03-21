<?php
header('Content-Type: application/json');

include 'db_connection.php';

try {
    $sql = "SELECT title, excerpt, category, readTime, imageUrl, content FROM resources";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $resources = [];
        while ($row = $result->fetch_assoc()) {
            $resources[] = $row;
        }
        echo json_encode(['status' => 'success', 'data' => $resources]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No resources found']);
    }
} catch (Exception $e) {
    error_log('Failed to fetch resources: ' . $e->getMessage()); // Log the error
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch resources: ' . $e->getMessage()]);
}

$conn->close();
?>
