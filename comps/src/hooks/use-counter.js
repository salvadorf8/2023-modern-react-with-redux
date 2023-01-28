import { useState, useEffect } from 'react';

// Custom Hook
export const useCounter = (initialCount) => {
    console.log('SF - ', initialCount);
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return { count: count, increment: increment };
};
