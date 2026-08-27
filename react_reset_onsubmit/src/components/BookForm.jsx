import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function BookForm({ onAddBook, editBook, onUpdateBook}) {
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        genre: "",
        price: ""
    })
    useEffect(() => {
        if(editBook) {
            setBookData({
                title: editBook.title,
                author: editBook.author,
                genre: editBook.genre,
                price: editBook.price
            })
        }
    }, [editBook])
    const handleSubmit =(e) => {
        e.preventDefault()
        if(!bookData.title || !bookData.author) {
            alert("malumotlarni toliq kiriting")
            return 
        }
        if(editBook){
            onUpdateBook({
                ...bookData,
                id: editBook.id
            })
        } else {
            const newBook ={
                ...bookData,
                id: uuidv4(),
            }
            onAddBook(newBook)
        }
        setBookData({title: "", author: "", genre: "", price: ""})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="kitob nomi"
            value={bookData.title}
            onChange={(e) => setBookData({...bookData, title: e.target.value})}
            />
            <input 
            type="text"
            placeholder="muallif"
            value={bookData.author}
            onChange={(e) => setBookData({...bookData, author: e.target.value})}
            />
            <input
             type="text"
             placeholder="narxi"
             value={bookData.price}
             onChange={(e) => setBookData({...bookData, price: e.target.value})}
             />
             <select 
             value={bookData.genre}
             onChange={(e) => setBookData({...bookData, genre: e.target.value})}
             >
                <option value="">janrni tanlang</option>
                <option value="badiiy">badiiy</option>
                <option value="ilmiy">ilmiy</option>
                <option value="detektiv">detektiv</option>
             </select>

             <button type="submit">{editBook ? "yangilash" : "kitob qoshish"}</button>

        </form>
    )
}

export default BookForm