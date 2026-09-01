  import { useContext } from "react";
  import { BookContext } from "../context/BookContext";
  import BookForm from "../components/BookForm";
  import BookList from "../components/BookList";



function BooksPage() {
  const {books, isPending, error} = useContext(BookContext)
 

  return(
    <div style={{padding: "20px", maxWidth: "500px", margin: "0 auto"}}>
      <h2>kitoblar dokoni tizimi (Global Context)</h2>
      {isPending && <div className="text-xl font-bold text-blue-600 animate-pulse p-5">Kitoblar yuklanmoqda, iltimos kuting...</div>}
      {error && <div className="text-xl font-bold text-red-600 p-5 bg-red-100 border border-red-400 rounded">{error}</div>}


      <BookForm/>
      <BookList/>
    </div>
  )
 }

 export default BooksPage