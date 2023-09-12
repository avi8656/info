import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
  const[users, setusers] = useState([]);

  const allusers = async()=>{
       try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const d = await data.json();
        console.log(d);
        setusers(d);
        
       } catch (error) {
        console.log(error)
       }
  }

  useEffect(()=>{
    allusers();
  },[])

  return (
    <div className='container mt-5'>
      <h1>Users</h1>
      {users.length > 0 
        ? users.map((u)=>(
          <div className='w-75 alert alert-light mb-3' key={u.id}>
            <h3><b>Name :</b> {u.name}</h3>
            <h5><b>Email :</b> {u.email}</h5>
            <Link to={`/Profile/${u.id}`}>Details</Link>
          </div>
        ))
      : "Loading...." }
    </div>
  )
}

export default Profile
