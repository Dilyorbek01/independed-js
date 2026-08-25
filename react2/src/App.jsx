import { useState } from "react"


function Forma() {
  const [player, setPlayer] = useState("")
  const [text, setText] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        alert(`Futbolchi malumoti: Ism-${player},  klub-${text}`)
        setPlayer("")
        setText("")
        
    }
    return(
        <form
        onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "250px", gap: "10px", margin: "20px" }}>
          <h3>Yangi futbolchi qoshish</h3>
            <input
             type="text"
             placeholder="Futbolchi ismi"
             value={player}
             onChange={(e) => setPlayer(e.target.value)}
             />
             <input
              type="text"
              placeholder="Futbolchi klubi"
              value={text}
              onChange={(e) => setText(e.target.value)}
              />
             <button type="submit">yuborish</button>
          
        </form>
    )
}
export default Forma