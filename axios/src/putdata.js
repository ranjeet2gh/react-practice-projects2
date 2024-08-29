import React, { useState } from 'react';
import axios from 'axios';

const UpdateData = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [response, setResponse] = useState(null);

  const handleUpdate = (event) => {
    event.preventDefault();

    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body: 'Updated content',
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
      <h1>Update Post</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
      {response && <div><h2>Response:</h2><pre>{JSON.stringify(response, null, 2)}</pre></div>}
    </div>
  );
};

export default UpdateData;