import React, { useState } from 'react';
import axios from 'axios';

const DeletePost = () => {
  const [postId, setPostId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = (event) => {
    event.preventDefault();

    // The ID of the post to delete
    const idToDelete = postId;

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${idToDelete}`)
      .then(response => {
        setResponse(response.data);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setResponse(null);
      });
  };

  return (
    <div>
      <h1>Delete Post</h1>
      <form onSubmit={handleDelete}>
        <div>
          <label>Post ID:</label>
          <input
            type="text"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
          />
        </div>
        <button type="submit">Delete</button>
      </form>
  {/* // print response on screen  if delete perform successfully */}
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
{/* otherwise throw an error which display on screen */}
      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{error.message}</pre>
        </div>
      )}
    </div>
  );
};

export default DeletePost;