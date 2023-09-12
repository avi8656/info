import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const btnhandler = ()=>{
    navigate('/About');
  }
  return (
    <div className='container mt-5'>
      <h3>Home Page</h3>
      <p className='w-75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At obcaecati ratione minus ab nesciunt cumque id odio est quae fugiat magni ut cum tempora fuga optio, facilis temporibus dolorem autem. Velit quibusdam accusantium atque nobis quisquam? Incidunt, alias similique. Autem cum animi tempora labore distinctio, est asperiores voluptas, neque rerum debitis voluptatibus cupiditate modi tenetur dolore totam tempore delectus deleniti aliquam impedit? Eveniet quaerat magni eligendi eum non sed molestias, soluta nisi expedita provident esse consequuntur voluptatibus assumenda maiores veniam!</p>
      <button onClick={btnhandler} className='btn btn-primary'>About</button>  
    </div>
  )
}

export default Home
