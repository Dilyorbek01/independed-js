import { useState } from "react";
import { v4 as uuidv4} from "uuid";

function ProductForm() {
    const [dataForm, setDataForm] = useState({
        title: "",
        price: "",
        category: ""
    })
    const [products, setProducts] = useState([])
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newProduct = {
            ...dataForm,
            id: uuidv4()
        }
        setProducts((prevProducts) => [...prevProducts, newProduct])
        console.log("qoshilgan malumot: ",  dataForm)
     setDataForm({
        title:"",
        price: "",
        category: ""
     })
    }
    return(
        <div style={{margin: "20px 0", textAlign:"center"  }}>
            <h2>yangi mahsulot qoshish</h2>

            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="titleni yozing"
                 value={dataForm.title}
                 onChange={(e)=> setDataForm({...dataForm, title: e.target.value})}
                 />
                 <input 
                 type="text"
                 placeholder="priceni yozing"
                 value={dataForm.price}
                 onChange={(e) => setDataForm({...dataForm, price: e.target.value})}
                 />
                 <select 
                    value={dataForm.category}
                    onChange={(e) => setDataForm({...dataForm, category: e.target.value})}
                    >
                    
                    <option value="">Kategoriyani tanlang</option>
                    <option value="telefon">telefon</option>
                    <option value="noutbuk">noutbuk</option>
                    <option value="aksessuar">aksessuar</option>
                 </select>
                 <button type="submit" >mahsulotni qoshish</button>
            </form>
            <div style={{marginTop: "20px"}}>
                <h3>mahsulotlar royxati:</h3>
                {products.length===0 ? <p>hozircha malumot yoq</p> : null }
                    <ul style={{listStyleType: "none", padding: 0}}>
                        {products.map((item) => (
                            <li key={item.id} style={{border: "1px solid #ccc", margin: "10px auto", padding: "10px", width: "300px"}}>
                                <h4>{item.title}</h4>
                                <p>narxi: {item.price} $</p>
                                <p>kategioriya: {item.category}</p>
                                <small style={{color: "gray"}}>ID: {item.id}</small>
                            </li>
                        ))}
                    </ul>
                

            </div>


        </div>
    )
}
export default ProductForm