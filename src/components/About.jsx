import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const homehandler = ()=>{
    navigate('/')
  }
  return (
    <div className='container mt-5'>
      <h1>About</h1>
      <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus enim rerum eveniet, dolor tenetur sequi perferendis quibusdam voluptatem dicta ea aliquam cum optio velit pariatur debitis sint. Quas vitae aliquid reiciendis nemo beatae obcaecati excepturi nam. Consectetur et omnis voluptate tenetur recusandae! Ut iste amet laborum explicabo, sapiente nemo maiores alias nesciunt, inventore dolor, dignissimos non cupiditate sint impedit quo blanditiis deserunt laboriosam placeat sed aliquam? Tempore, obcaecati ducimus fugit sequi a aliquam nihil voluptas earum illum libero fuga nulla sit non iure architecto eaque aut. Odio nihil harum alias mollitia ut sequi quam consequatur placeat. Ratione, vero aut?</p>
    <button onClick={homehandler} className='btn btn-danger'>Home Page</button>
</div>
  )
}

export default About
