import { useContext } from 'react';

import NavigationContext from '../context/NavigationContext';

const Route = ({ path, children }) => {
    const { currentPath } = useContext(NavigationContext);

    console.log('SF - path', path);

    if (path === currentPath) {
        return children;
    }

    return null;
};

export default Route;
