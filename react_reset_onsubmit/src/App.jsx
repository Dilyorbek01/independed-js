  import { useState } from "react";
  import UserForm from "./components/UserForm";
  import UserList from "./components/UserList";
  function App() {
    const [ users, setUsers] = useState([])
    const handleAddUser =(newUser)=>{
  setUsers((prevUsers) => [...prevUsers, newUser])
    }
    const handleDelete =(id)=>{
      setUsers((prevUsers) => prevUsers.filter((item) => item.id !== id ))
      
    }
    return(

      <div style={{padding: "20px", maxWidth:"500px", margin: "0 auto"}}>
        <h2>foydalanuvchilar tizimi</h2>
        <UserForm onAddUser={handleAddUser}/>
        <UserList users={users} onDeleteUser={handleDelete}/>
        
      </div>
    )
  }
  export default App