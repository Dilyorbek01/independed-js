import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
function App() {
const {count, increment} = useContext(CounterContext)

return(
  <div>
    <h1>{count}</h1>
    <button onClick={increment}>Sonni oshirish</button>
  </div>
)
}
export default App