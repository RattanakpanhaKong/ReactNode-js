import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/home" 
import CreatePost from "./pages/createPost"

function App() {

  return (
    <div>
      <Router>
        <Link to="/createPost">Create a Post</Link>
        <Link to="/">Homepage</Link>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createPost" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
