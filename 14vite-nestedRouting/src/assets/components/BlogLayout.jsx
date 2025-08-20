import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <div>
      <h2>BLOG LAYOUT</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic. Temporibus natus, 
        nulla placeat enim repellat facere nobis maxime repellendus, 
        tempora ratione totam pariatur debitis ducimus rerum nostrum veritatis quo?</p>
        <Outlet />
    </div>
  )
}

export default BlogLayout;