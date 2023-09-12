import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const {id} = useParams();
   const[user,setuser] = useState([]);
   const userinfo = async()=>{
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const d = await data.json();
        setuser(d);
      } catch (error) {
        console.log(error);
      }
   }
   useEffect(()=>{
    userinfo();
   })
  return (
    <div className='container'>
      <h3>User Information</h3>
      <p>Name : {user.name}</p>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Website : {user.website}</p>
    </div>
  )
}

export default Details
