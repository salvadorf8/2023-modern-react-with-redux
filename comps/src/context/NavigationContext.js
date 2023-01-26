import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // at initial render, a listener is added to keep track of pathnames while clicking forward backward arrow
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    // will pushState a pathname directly
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    const value = { currentPath, navigate };

    return (
        <NavigationContext.Provider value={value}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContext;
