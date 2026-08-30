  import { useEffect, useState } from "react";
  import BookForm from "../components/BookForm";
  import BookList from "../components/BookList";



function BooksPage() {
  const [books, setBooks] = useState([])
  const [editBook, setEditBook] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data) => setBooks(data))
  }, [])
  const handleAddBook =(newBook) => {
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newBook)
    })
    .then((res) => res.json())
    .then((savedBook) => {
      setBooks((prevBooks) => [...prevBooks, savedBook])
    })
  }

  const handleDeleteBook =(id)=> {
    fetch(`http://localhost:3000/books/${id}`,{
      method: "DELETE",

    }).then(() => {
      setBooks((prevBooks) => prevBooks.filter((item) => item.id !== id))
    })

  }
  const handleEditClick =(book)=> {
    setEditBook(book)
  }
  const handleUpdateBook =(updatedBook)=> {
    fetch(`http://localhost:3000/books/${updatedBook.id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedBook),
    })
    .then((res) => res.json())
    .then((data) => {
      setBooks((prevBooks) => 
      prevBooks.map((item) => (item.id ===data.id ? data : item)))
      setEditBook(null)
    })
  } 

  return(
    <div style={{padding: "20px", maxWidth: "500px", margin: "0 auto"}}>
      <h2>kitoblar dokoni tizimi</h2>
      <BookForm
      onAddBook={handleAddBook}
      editBook={editBook}
      onUpdate={handleUpdateBook}
      />
      <BookList
      books={books}
      onDeleteBook={handleDeleteBook}
      onEditBook={handleEditClick}
      />
    </div>
  )
 }

 export default BooksPage