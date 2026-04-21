import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);
  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={e => setLiked(e.target.checked)} />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}