import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

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
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleOnClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg' />
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    );
};

export default Dropdown;
