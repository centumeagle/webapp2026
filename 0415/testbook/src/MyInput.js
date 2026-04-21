import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </>
  );
}