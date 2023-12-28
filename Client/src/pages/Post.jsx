import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Post = () => {
    
    let  { id } = useParams()

    const [postObject, setPostObject] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
          setPostObject(response.data)
        });
      }, []);
  
    return (
    <div id="postPage" className='flex pt-4'>
      <div id="leftSide" className='w-1/2 flex justify-center'>
        <div className='w-2/3 border border-1 border-black my-6 text-center rounded-lg bg-blue-500'>
          <div id="title" className="text-white p-2">{postObject.title}</div>
          <div id="postText" className="h-24 bg-white flex items-center justify-center">{postObject.postText}</div>
          <div id="username" className="text-white p-2">{postObject.username}</div>
        </div>
      </div>
      <div id="rightSide" className='w-1/2'>
        Comment Section
      </div>
    </div>
  )
}

export default Post