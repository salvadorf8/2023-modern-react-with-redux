import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

        return (
            <div key={item.id}>
                <div>
                    <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                        {item.label}
                        {icon}
                    </div>
                    {isExpanded && <div className='border-b p-5'>{item.content}</div>}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='border-x border-t rounded'>{renderedItems}</div>
        </div>
    );
};

export default Accordion;
