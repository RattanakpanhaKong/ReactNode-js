import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Post = () => {
    
    let  { id } = useParams()

    const [postObject, setPostObject] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const addComment = () => {
        axios.post('http://localhost:3001/comments', { commentBody: newComment, PostId:id })
        .then((response) => {
          // console.log('Comment Added !')
          const commentToAdd = { commentBody: newComment }
          setComments([...comments, commentToAdd])
          setNewComment("")
        })
    }

    useEffect( () => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
          setPostObject(response.data)
        });
        
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
          setComments(response.data)
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
        <div id="addCommentContainer" className='flex gap-x-4'>
          <input 
            onChange={(event) => {
              setNewComment(event.target.value)
            }}
            value={newComment}
            type="text" 
            name="" 
            placeholder='Comment...' 
            className='border border-black'/>
          <button 
            onClick={addComment}
            className='bg-blue-500 rounded-lg text-white p-2'>Add Comment</button>
        </div>
        <div id="listOfComments" className=''>
          {comments.map((comment, key) => {
            return (
            <div key={key} className='border border-black my-2'> 
              <p>{comment.commentBody}</p> 
            </div>
            
            )})}
        </div>
      </div>
    </div>
  )
}

export default Post