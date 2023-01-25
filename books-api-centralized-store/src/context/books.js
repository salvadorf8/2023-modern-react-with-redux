import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    /**
     * made use of useCallback to fix ESLint warning
     * basic example: const stableFetchBooks = useCallback(fetchBooks, []);
     */
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);

        if (response.status === 200 && response.statusText === 'OK') {
            const updatedBooks = books.filter((book) => {
                return book.id !== id;
            });

            setBooks(updatedBooks);
        }
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        if (response.status === 200 && response.statusText === 'OK') {
            const updatedBooks = books.map((book) => {
                if (book.id === id) {
                    return { ...book, ...response.data };
                }

                return book;
            });

            setBooks(updatedBooks);
        }
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        setBooks([...books, response.data]);
    };

    const value = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};

export default BooksContext;
