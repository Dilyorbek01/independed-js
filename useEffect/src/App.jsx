import { Routes, Route, Link } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return(
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow-md p-4 flex gap-5 justify-center mb-5">
       <Link to="/" className="text-blue-600 font-semibold hover: underline">
          bosh sahifa
       </Link>
       <Link to="/about" className="text-blue-600 font-semibold hover: underline">
          biz haqimizda 
       </Link>

       <Link to="/books" className="text-blue-600 font-semibold hover:underline">
          Kitoblar dokoni
       </Link>
       </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/books" element={<BooksPage/>} />
      </Routes>
    </div>
  )
}
export default App