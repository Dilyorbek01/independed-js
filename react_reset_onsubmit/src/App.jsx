
  // import UserForm from "./components/UserForm";
  // import UserList from "./components/UserList";
  // function App() {
  //   const [ users, setUsers] = useState([])
  //   const [ editUser, setEditUser] = useState(null)
  //   const handleEditClick =(user)=>{
  //     setEditUser(user)
  //   }
  //   const handleUpdateUser =(updatedUser)=>{
  //       setUsers((prevUsers) => 
  //       prevUsers.map((item) => (item.id === updatedUser.id ? updatedUser : item ))
  //     )
  //     setEditUser(null)
  //   }
  //   const handleAddUser =(newUser)=>{
  // setUsers((prevUsers) => [...prevUsers, newUser])
  //   }
  //   const handleDelete =(id)=>{
  //     setUsers((prevUsers) => prevUsers.filter((item) => item.id !== id ))
      
  //   }
  //   return(

  //     <div style={{padding: "20px", maxWidth:"500px", margin: "0 auto"}}>
  //       <h2>foydalanuvchilar tizimi</h2>
  //       <UserForm 
  //       onAddUser={handleAddUser}
  //       editUser={editUser}
  //       onUpdateUser={handleUpdateUser}
  //       />
  //       <UserList users={users} onDeleteUser={handleDelete} onEditUser={handleEditClick}/>
        
  //     </div>
  //   )
  // }
  // export default App

  import { useEffect, useState } from "react";
  import BookForm from "./components/BookForm";
  import BookList from "./components/BookList";



function App() {
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

 export default App