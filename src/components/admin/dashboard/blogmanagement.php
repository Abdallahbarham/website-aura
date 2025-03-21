<?php
// Include database connection
include 'db_connection.php';

// Fetch resources
$sql = "SELECT id, title, excerpt, category, readTime, imageUrl, content, created_at, updated_at FROM resources";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Title: " . $row["title"]. " - Excerpt: " . $row["excerpt"]. " - Category: " . $row["category"]. " - Read Time: " . $row["readTime"]. " - Image URL: " . $row["imageUrl"]. " - Content: " . $row["content"]. " - Created At: " . $row["created_at"]. " - Updated At: " . $row["updated_at"]. "<br>";
    }
} else {
    echo "0 results from database.<br>";
}

// Manual list items from resourcesdata
$manualResources = [
    [
        "id" => 1,
        "title" => "Sample Title 1",
        "excerpt" => "Sample Excerpt 1",
        "category" => "Sample Category 1",
        "readTime" => "5 min",
        "imageUrl" => "sample1.jpg",
        "content" => "Sample Content 1",
        "created_at" => "2023-10-01 12:00:00",
        "updated_at" => "2023-10-01 12:00:00"
    ],
    [
        "id" => 2,
        "title" => "Sample Title 2",
        "excerpt" => "Sample Excerpt 2",
        "category" => "Sample Category 2",
        "readTime" => "10 min",
        "imageUrl" => "sample2.jpg",
        "content" => "Sample Content 2",
        "created_at" => "2023-10-02 12:00:00",
        "updated_at" => "2023-10-02 12:00:00"
    ]
];

echo "<br>Manual List Items:<br>";
foreach ($manualResources as $resource) {
    echo "id: " . $resource["id"]. " - Title: " . $resource["title"]. " - Excerpt: " . $resource["excerpt"]. " - Category: " . $resource["category"]. " - Read Time: " . $resource["readTime"]. " - Image URL: " . $resource["imageUrl"]. " - Content: " . $resource["content"]. " - Created At: " . $resource["created_at"]. " - Updated At: " . $resource["updated_at"]. "<br>";
}

// Close connection
$conn->close();
?>
