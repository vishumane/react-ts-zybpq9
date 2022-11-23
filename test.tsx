import * as React from 'react';

const Test = () => {
  let name = 'vishal';
  let data = [2, 4, 5, 6, 8, 9];
  return (
    <div>
      <p>hello I m from test </p>
      <p>{name}</p>
      <ul>
        <li>{data.map((number) => number / 2)}</li>
      </ul>
    </div>
  );
};
export default Test;
