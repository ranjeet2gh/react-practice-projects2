import React, { useState } from 'react';
import axios from 'axios';

const PostData = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body: content,
      userId: 1,
    })
    .then(response => {
      setResponse(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && <div><h2>Response:</h2><pre>{JSON.stringify(response, null,3)}</pre></div>}
    </div>
  );
};

export default PostData;