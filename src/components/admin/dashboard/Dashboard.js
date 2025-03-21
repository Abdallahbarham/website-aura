import React from 'react';
import { toast } from 'react-toastify'; // Assuming you are using react-toastify for toast notifications
import 'react-toastify/dist/ReactToastify.css';

// ...existing code...

const Dashboard = () => {
    // ...existing code...

    const handleTestButtonClick = () => {
        const testData = {
            title: 'Test Post',
            excerpt: 'This is a test excerpt.',
            category: 'Test Category',
            tags: 'test,post',
            readTime: '1 min',
            imageUrl: 'http://example.com/test.jpg',
            content: 'This is the content of the test post.'
        };

        fetch('/path/to/php/testInsert.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Post created successfully') {
                toast.success('Test post created successfully');
            } else {
                toast.error('Failed to create test post: ' + data.error);
            }
        })
        .catch(error => {
            toast.error('Failed to create test post: ' + error.message);
        });
    };

    return (
        <div>
            {/* ...existing code... */}
            <button onClick={handleTestButtonClick}>Test</button>
            {/* ...existing code... */}
        </div>
    );
};

export default Dashboard;
