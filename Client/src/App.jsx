import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/home" 
import CreatePost from "./pages/CreatePost"
import Post from "./pages/Post"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import AuthContext from "./helper/AuthContext"
import { useEffect, useState } from "react"

function App() {
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('accessToken')){
      setAuthState(true)
    }
  }, [])
  return (
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className="flex justify-center gap-x-10 mt-4">
          <Link to="/" className="bg-blue-500 text-white p-2 rounded-lg">Homepage</Link>
          <Link to="/createPost" className="bg-blue-500 text-white p-2 rounded-lg">Create a Post</Link>
          {!authState &&
            <>
              <Link to="/login" className="bg-blue-500 text-white p-2 rounded-lg">Login</Link>
              <Link to="/registration" className="bg-blue-500 text-white p-2 rounded-lg">Registration</Link>
            </>
          }
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
