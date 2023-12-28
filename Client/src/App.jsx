import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/home" 
import CreatePost from "./pages/createPost"
import Post from "./pages/Post"

function App() {

  return (
    <div>
      <Router>
        <div className="flex justify-center gap-x-10 mt-4">
          <Link to="/createPost" className="bg-blue-500 text-white p-2 rounded-lg">Create a Post</Link>
          <Link to="/" className="bg-blue-500 text-white p-2 rounded-lg">Homepage</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
