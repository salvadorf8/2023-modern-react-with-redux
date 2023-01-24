import { useEffect, useState } from 'react';
import axios from 'axios';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

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

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get('http://localhost:3001/books');
            setBooks(response.data);
        };

        fetchBooks();
    }, []);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
