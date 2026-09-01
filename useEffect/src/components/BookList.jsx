import { useContext } from "react";
import {BookContext} from "../context/BookContext";


function BookList(){
    const {books, handleDeleteBook, handleEditClick} = useContext(BookContext)

    return(
        <div>
            <h3>kitoblar royxati (Context)</h3>
            {books.length === 0 ? <p>hozircha kitoblar yoq</p> : null}

            <ul>
                {books.map((item) => (
                    <li key={item.id} style={{border: "1px solid #ccc", padding: "10px", margin: "10px"}}>
                        <h4>{item.title}</h4>
                        <p>muallif: {item.author}</p>
                        <p>narxi: {item.price}</p>
                        <p>janri: {item.genre}</p>
                        <button onClick={() => handleDeleteBook(item.id)}>ochirish</button>
                        <button onClick={() => handleEditClick(item)}>tahrirlash</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList