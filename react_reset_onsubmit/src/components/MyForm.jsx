import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function MyForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: ""
    })
    const [users, setUsers] = useState([])
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newUser = {
            ...formData,
            id: uuidv4()
        }
        setUsers((prevUsers) => [...prevUsers, newUser])
        console.log("komponentdan kelgan malumot: ", formData)
        setFormData({
            name: "",
            email: "",
            role: ""
        })
    } 
    return(
        <div style={{margin: "20px 0"}}>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="ismingizni yozing"
                 value={formData.name}
                 onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                  type="email"
                  placeholder="emailni kiriting"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />

              <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="">yonalishingizni tanlang</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>

                  
                  <button type="submit">yuborish</button>
            </form>
            <div style={{marginto: "20px"}}>
                <h3>ismlar royxati</h3>
                {users.length === 0 ? <p>hozircha malumot yoq</p> : null}
                <ul style={{listStyleType: "none"}}>
                    {users.map((item) => (
                        <li key={item.id} style={{border: "1px solid #ccc"}}>
                            <h4>{item.name}</h4>
                            <p>email: {item.email}</p>
                            <p>yonalish: {item.role}</p>
                            <small style={{color: "gray"}}>ID: {item.id}</small>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default MyForm