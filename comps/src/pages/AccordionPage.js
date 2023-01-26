import Accordion from '../components/Accordion';

const AccordionPage = () => {
    const items = [
        {
            id: 1,
            label: 'Can you swim',
            content: 'get ready for 2.4 miles'
        },
        {
            id: 2,
            label: 'Can you bike',
            content: 'get ready for 112 miles'
        },
        {
            id: 3,
            label: 'Can you run',
            content: 'get ready for 26.2 miles'
        }
    ];

    return (
        <div className='App'>
            <h1 className='text-3xl font-bold underline m-4'>Hello world!</h1>
            <Accordion items={items} />
        </div>
    );
};

export default AccordionPage;
