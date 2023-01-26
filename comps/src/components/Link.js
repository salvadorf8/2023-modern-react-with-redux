import { useContext } from 'react';
import classNames from 'classnames';

import NavigationContext from '../context/NavigationContext';

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
