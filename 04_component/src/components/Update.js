import { useState } from 'react';

const Update = ({ title, body, onUpdate }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(newTitle, newBody);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      /><br/>
      <textarea
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      ></textarea><br/>
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
