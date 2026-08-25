function UserList({users, onDeleteUser}){
    return(
        <div style={{marginTop: "20px"}}>
            <h3>ismlar royxati</h3>
            {users.length===0 ? <p>hozircha malumot yoq</p> : null}
            <ul style={{listStyleType: "none"}}>
            {users.map((item) => (
                <li key={item.id} style={{border: "1px solid #ccc", marginBottom: "10px", padding:"10px"}}>
                    <h4>{item.name}</h4>
                    <p>email: {item.email}</p>
                    <p>yonalish: {item.role}</p>
                    <small style={{color: "gray"}}>ID: {item.id}</small>
                    <button onClick={() => onDeleteUser(item.id)}>ochirish</button>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default UserList