import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [listOfPosts, setListOfPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data)
    })
  }, [])

  return (
    <div className='px-[450px]'>
      {listOfPosts.map((value, key) => {
        return (
          <div id='post' className='border border-1 border-black m-2 text-center rounded-lg bg-blue-500'>
            <div id='title' className='text-white'>
              {value.title}
            </div>
            <div id="body" className='h-20 bg-white flex items-center justify-center'>
              <div>{value.postText}</div>
            </div>
            <div id="username" className='text-white'>
              {value.username}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
