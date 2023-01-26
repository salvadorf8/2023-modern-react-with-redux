import { useState } from 'react';

const Dropdown = ({ options, onSelect, selection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        // a little practice passing a callback function to get the previousValue n use that
        setIsOpen((prevValue) => !prevValue);
    };

    const handleClickedOption = (option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value} onClick={() => handleClickedOption(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <div onClick={handleOnClick}>{selection?.label || 'Select...'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
};

export default Dropdown;
