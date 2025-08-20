
import axios from 'axios'
import React,{useState,useEffect} from "react"
import { useParams } from 'react-router-dom'

function SingleBlog() {
  let params = useParams()

  const [SingleBlogData,setSingleBlogData] = useState({})
  console.log(params)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts" + params.Id)
    .then((res)=>{
      console.log(res)
      setSingleBlogData(res.data)

    })
  },[])
  return (
    <div>
      <h3>SINGLE BLOG</h3>
      <div className='singlepost'>
        <h4>{SingleBlogData.title}</h4>
        <p>{SingleBlog.body}</p>

      </div>
    </div>
  )
}

export default SingleBlog;