function BookList({books, onDeleteBook, onEditBook}) {
    return(
        <div>
            <h3>kitoblar royxati</h3>
            {books.length === 0 ? <p>hozircha kitoblar yoq</p> : null}
            <ul>
                {books.map((item) => (
                    <li key={item.id}>
                        <h4>{item.title}</h4>
                        <p>muallif: {item.author}</p>
                        <p>narxi: {item.price}</p>
                        <p>janri: {item.genre}</p>
                        <button onClick={() => onDeleteBook(item.id)}>ochirish</button>
                        <button onClick={() => onEditBook(item)}></button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default BookList