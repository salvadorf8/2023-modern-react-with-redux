import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

const Dropdown = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        // a little practice passing a callback function to get the previousValue n use that
        setIsOpen((prevValue) => !prevValue);
    };

    const handleClickedOption = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' key={option.value} onClick={() => handleClickedOption(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div className='w-48 relative'>
            <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleOnClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg' />
            </div>
            {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
        </div>
    );
};

export default Dropdown;
