import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Users , setUsers] = useState([])


  const getUsersData = () =>{
      axios.get('https://masaiverse666.herokuapp.com/users')
      .then((res)=>{
          setUsers(res.data.user)
      }).catch((error)=>{
          console.log(error)
      })
  }

  useEffect(()=>{
    getUsersData()
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<Admin Users={Users} getUsersData={getUsersData}></Admin>}></Route>
        <Route path='/users' element={<User getUsersData={getUsersData}></User>}></Route>
      </Routes>
    </div>
  );
}

export default App;
