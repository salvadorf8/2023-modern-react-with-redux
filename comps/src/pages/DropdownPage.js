import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
    const [selection, setSelection] = useState(null);
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ];

    const handleSelect = (option) => {
        setSelection(option);
    };

    return (
        <div>
            <div className='flex space-x-5 m-2'>
                <Dropdown options={options} onChange={handleSelect} value={selection} />
                <Dropdown options={options} onChange={handleSelect} value={selection} />
            </div>
        </div>
    );
};

export default DropdownPage;
