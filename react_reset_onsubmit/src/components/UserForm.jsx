import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function UserForm({onAddUser}) {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        role: ""
    })
    const handleSubmit =(e)=>{
        e.preventDefault()

        const newUser ={
            ...formData,
            id: uuidv4()
        }
        onAddUser(newUser)
        setFormData({name: "", email: "", role: ""})
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             placeholder="ismingiz"
             value={formData.name}
             onChange={(e) => setFormData({...formData, name: e.target.value})}
             />
             <input
              type="email"
             placeholder="emailingiz"
             value={formData.email}
             onChange={(e) => setFormData({...formData, email: e.target.value})}
             />
             <select 
             value={formData.role}
             onChange={(e)=> setFormData({...formData, role: e.target.value})}
             >
                <option value="">yonalishingizni tanlash</option>
                <option value="frontend">frontend</option>
                <option value="backend">backend</option>
             </select>
             <button type="submit">yuborish</button>
        </form>
    )

}
export default UserForm