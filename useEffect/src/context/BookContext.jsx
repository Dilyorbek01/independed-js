import { createContext, useState, useEffect } from "react";

export const BookContext = createContext()

export function BookProvider({children}) {
    const [books, setBooks] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [editBook, setEditBook] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((res) => {
            if(!res.ok) throw Error("xatolik yuz berdi")
                return res.json()
        })
        .then((data) => {
            setBooks(data)
            setIsPending(false)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })
    }, [])
    const handleAddBook = (newBook) => {
        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBook),
        })
        .then((res) => res.json())
        .then((savedBook) => {
            setBooks((prev) => [...prev, savedBook])
        })
    }
    const handleDeleteBook =(id)=> {
        fetch(`http://localhost:3000/books/${id}`, {method: "DELETE"})
        .then(() => {
            setBooks((prev) => prev.filter((item) => item.id !== id))
        })
    }
    const handleEditClick =(book)=> setEditBook(book) 

    const handleUpdateBook =(updatedBook) => {
        fetch(`http://localhost:3000/books/${updatedBook.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedBook),
        })
        .then((res) => res.json())
        .then((data) => {
            setBooks((prev) => prev.map((item) => (item.id === data.id ? data : item)))
            setEditBook(null)
        })
    }
    return(
        <BookContext.Provider
            value={{    
                books,
                isPending,
                error,
                editBook,
                handleAddBook,
                handleDeleteBook,
                handleEditClick,
                handleUpdateBook,
            }}
        >
            {children}
        </BookContext.Provider>
    )
}
