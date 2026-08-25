function ShoppingList({items, handleDelete}) {
    return(
        <div>
            {items.map((item) =>(
                <div key={item.id} style={{border: "1px solid gray", margin: "8px", padding:"8px" }}>
                    <h4>{item.nomi} - {item.narxi} som</h4> 
                    <button onClick={() => handleDelete(item.id)}>Ochirish</button>
                    </div>
          )  )}
        </div>
    )
}

export default ShoppingList