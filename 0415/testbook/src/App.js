import Counter from './Counter';
import MyInput from './MyInput';
import MyCheckbox from './MyCheckbox';
import Form from './Form';

export default function App() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>나의 리액트 컴포넌트 모음</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>1. 카운터</h2>
        <Counter />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. 입력창</h2>
        <MyInput />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>3. 체크박스</h2>
        <MyCheckbox />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>4. 프로필 폼</h2>
        <Form />
      </section>
    </div>
  );
}