import { useState } from "react";
import Modal from "./components/Modal";
import ShoppingList from "./components/ShoppingList";

function App(){
  const [items, setItems] = useState([
    {id: 1, nomi: "Olma", narxi: 12000}, 
    {id: 2, nomi: "Sut", narxi: 9000}])
  const [showList, setShowList] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const handleDelete =(id)=>{
    setItems(items.filter((item) => item.id !== id))
  }
  return(
      <div style={{padding: "20px"}}>
        <h1>mening xaridlarim</h1>
        <button onClick={()=>setShowList(!showList)}>
          {showList ? "royxatni yashirish" : "royaxatni korsatish"}
        </button>
        <button onClick={()=> setShowModal(true)}
          style={{marginLeft: "10px"}}> Yangi mahsulot qoshish</button>
          {showList && <ShoppingList items={items} handleDelete={handleDelete}/>}
          {showModal && (
            <Modal handleClose={()=> setShowModal(false)}>
              <h2>yangi mahsulot qoshish</h2>
              <p>shuyerda form yoziladi</p>
            </Modal>
        )}
    </div>
  )
  
}
export default App