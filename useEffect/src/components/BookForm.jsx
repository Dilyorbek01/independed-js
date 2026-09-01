import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { BookContext } from "../context/BookContext";

function BookForm() {
    // TO'G'RILANDI: handleUpdateBook nomini pastda to'g'ri ishlatamiz
    const { editBook, handleAddBook, handleUpdateBook } = useContext(BookContext);
    
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        genre: "", 
        price: ""
    });

    useEffect(() => {
        if (editBook) {
            setBookData({
                title: editBook.title,
                author: editBook.author,
                genre: editBook.genre,
                price: editBook.price,
            });
        }
    }, [editBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookData.title || !bookData.author) {
            alert("malumotlarni toliq kiriting");
            return;
        }
        if (editBook) {
            // TO'G'RILANDI: onUpdateBook o'rniga handleUpdateBook chaqirildi!
            handleUpdateBook({ ...bookData, id: editBook.id });
        } else {
            const newBook = { ...bookData, id: uuidv4() };
            handleAddBook(newBook);
        }
        setBookData({ title: "", author: "", genre: "", price: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* TO'G'RILANDI: barcha onChange qismlari obyekt formatiga keltirildi */}
            <input 
                type="text" 
                placeholder="kitob nomi"
                value={bookData.title}
                onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
            />
            <input 
                type="text" 
                placeholder="kitob muallifi"
                value={bookData.author}
                onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
            />
            <input
                type="number"
                placeholder="kitob narxi"
                value={bookData.price}
                onChange={(e) => setBookData({ ...bookData, price: e.target.value })}
            />
            <select 
                value={bookData.genre}
                onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
            >
                <option value="">janrni tanlang</option>
                <option value="badiiy">badiiy</option>
                <option value="ilmiy">ilmiy</option>
                <option value="detektiv">detektiv</option>
            </select>
            <button type="submit">{editBook ? "yangilash" : "kitob qoshish"}</button>
        </form>
    );
}

export default BookForm;
