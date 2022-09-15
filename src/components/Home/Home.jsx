import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
 
   
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button className="button-52" ><Link className='links' to={'/admin'}>Admin</Link></button>
      <button className="button-52" ><Link className='links' to={'/users'}>Users</Link></button>
    </div>
  )
}

export default Home
