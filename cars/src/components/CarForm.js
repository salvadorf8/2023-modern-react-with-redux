import { useState } from 'react';

const CarForm = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCostChange = (event) => {
        setCost(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>Car Name</div>
            <input value={name} onChange={handleNameChange} />
            <div>Car Cost</div>
            <input type='number' value={cost} onChange={handleCostChange} />
            <button>Submit</button>
        </form>
    );
};

export default CarForm;
