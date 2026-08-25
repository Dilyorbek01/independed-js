import { useState } from 'react'
import Profile from './components/Profile'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [isDark, setIsDark] = useState(false)
  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
      <h1>Jonli Profile Loyihasi</h1>
      <input type="text"  
       placeholder='Ismingizni kiriting'
       value={name}
       onChange={(e) => setName(e.target.value)}/>
       <br/> <br />
       <input type="number"
        placeholder="Yoshingizni kiriting" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} />
        <br /> <br />
       <button onClick={() => setIsDark(!isDark)}>
        Mavzuni o'zgartirish 
       </button>

       <hr />

       <Profile name={name} isDark={isDark} age={age} />
    </div>
  )
}

export default App