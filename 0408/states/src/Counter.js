import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
        console.log(count + 1); 
    }

    const minus = () => {
        setCount(count - 1);
        console.log(count - 1);
    }

    return (
        <div className='container' style={{ margin: 15 }}>
            <h2 className='int'>{count}</h2>
            <button className='plus' onClick={plus}>+</button>
            <button className='minus' onClick={minus}>-</button>
        </div>
    )
}

export default Counter;