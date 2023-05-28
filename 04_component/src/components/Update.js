import { useState } from 'react';

const Update = ({ title, body, onUpdate }) => {
  //useState를 사용하여 현재 상태 초기화
  //현재 Title을 업데이트 함
  //현재 내용을 업데이트 함
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(newTitle, newBody);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/**Title 업데이트 */}
      <input 
      type="text"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      /><br/>
      {/**Body 업데이트 */}
      <textarea
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      ></textarea><br/>

      {/**submit 버튼 렌더링 */}
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
