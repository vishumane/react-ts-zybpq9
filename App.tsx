import * as React from 'react';
import Test from './test';
import InputBox from './InputBox'
import './style.css';

export default function App(props) {
  const[state,setState]=React.useState();
  const onchange=(e)=>{
    setState(e.target.value);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{props.name}</p>
      <Test/>
      <InputBox value={state} onChange={onchange}/>
    </div>
  );
}
