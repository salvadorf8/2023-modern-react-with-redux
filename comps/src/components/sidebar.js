import Link from './Link';

const Sidebar = () => {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Basic Table', path: '/basic-table' },
        { label: 'Reusable Table', path: '/fruit-table' }
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link key={link.label} to={link.path} className='mb-4' activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
                {link.label}
            </Link>
        );
    });

    return <div className='sticky top-0 flex flex-col items-start col-span-1 sm:col-span-2'>{renderedLinks}</div>;
};

export default Sidebar;
