import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { PostType } from '../../../redux/store/features/data'
import { addPost, removePost } from '../../../redux/store/features/slice'

const PostComponent = () => {
  const postList: PostType[] = useSelector((state: any) => state.posts.value)

  const [name, setName] = useState<string>('')

  const [content, setContent] = useState<string>('')

  const dispatch = useDispatch()

  const inputNameRef = useRef<any>(null)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleContent = (e) => {
    setContent(e.target.value)
  }

  const id = uuidv4()

  const addToPostList = () => {
    dispatch(addPost({ id, name, content }))

    setName('')
    setContent('')

    inputNameRef.current.focus()
  }

  const removePostFromList = (id) => {
    dispatch(removePost({ id: id }))

    inputNameRef.current.focus()
  }

  useEffect(() => {
    inputNameRef.current.focus()
  }, [])

  // console.log(postList)
  return (
    <div className="container">
      <h1>Post Page</h1>
      <div className="add-post col-sm-8 p-2">
        <div className="d-grid gap-1">
          <input ref={inputNameRef} type="text" value={name} onChange={handleName} />
          <input type="text" value={content} onChange={handleContent} />
        </div>
        <button className="my-2 btn btn-outline-primary" onClick={addToPostList}>
          Add
        </button>
      </div>
      <div className="post-list col-sm-8">
        <div className="row ">
          {postList.map((post, id) => (
            <ul key={id}>
              <div className="my-2 p-2 content d-flex justify-content-between">
                <div className="content-li">
                  <li>Name: {post.name}</li>
                  <li>Content: {post.content}</li>
                </div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removePostFromList(post.id)}
                >
                  Remove
                </button>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostComponent
