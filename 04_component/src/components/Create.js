import { useState } from 'react';

const Create = ({ onCreate }) => { //Create 컴포넌트 정의 onCreate라는 props를 받아옴.
  const [title, setTitle] = useState('');//title과 setTitle 상태 변수를 생성하고 초기값은 ''빈 문자열
  const [body, setBody] = useState('');//body와 setBody 상태 변수를 생성하고 초기상태는 빈문자열

  const handleSubmit = (e) => {//submit폼이 제출되었을때 처리할 함수 정의
    e.preventDefault();//이벤트 기본 동작 막기(새로고침 방지)
    onCreate(title, body);//onCreate 함수를 호출하여 새로운 항목 생성
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br/>
      <textarea placeholder="body" value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea><br/>
      <button type="submit">Create</button>
    </form>
  );
};

export default Create;
