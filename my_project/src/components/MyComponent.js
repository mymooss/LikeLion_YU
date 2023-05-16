import React, { useState } from 'react';

const ChildComponent = (props) => {
   const [state, setState] = useState("아기사자");
   console.log(state)
   console.log(setState)
   //setState("아기사자2")

    return (
       <p> 
         {props.name} 컴포넌트 입니당 ㅋ<br/>
         {state}
       </p>
    );
 };
 

const MyComponent = () => {
    return (
      <>
         <p> 
         수정 되었습니당 .컴포넌트 입니당 ㅋ
         </p>
         <ChildComponent name="멋사" />
      </>
    );
 };
 
 export default MyComponent;