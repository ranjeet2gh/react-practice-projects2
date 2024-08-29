import React, { useState } from 'react';
import axios from 'axios';

const CheckPostMetadata = () => {
  const [postId, setPostId] = useState('');
  const [headers, setHeaders] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckMetadata = (event) => {
    event.preventDefault();

    // The ID of the post to check
    const idToCheck = postId;

    axios.head(`https://jsonplaceholder.typicode.com/posts/${idToCheck}`)
      .then(response => {
        // `response.headers` contains the headers of the response
        setHeaders(response.headers);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setHeaders(null);
      });
  };

  return (
    <div>
      <h1>Check Post Metadata</h1>
      <form onSubmit={handleCheckMetadata}>
        <div>
          <label>Post ID:</label>
          <input
            type="text"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
          />
        </div>
        <button type="submit">Check Metadata</button>
      </form>

      {headers && (
        <div>
          <h2>Headers:</h2>
          <pre>{JSON.stringify(headers, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{error.message}</pre>
        </div>
      )}
    </div>
  );
};

export default CheckPostMetadata;