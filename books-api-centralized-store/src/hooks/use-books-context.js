import { useContext } from 'react';

import BooksContext from '../context/books';

/**
 * basic taste of a custom hook
 * @returns
 */
export const useBooksContext = () => {
    return useContext(BooksContext);
};
