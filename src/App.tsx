import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { BsRocketFill } from "react-icons/bs";


function App() {
  const [topbar, setTopbar]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 300){
        setTopbar(true)
      }else{
        setTopbar(false)
      }
    })
  },[])
 const totopfunc = () =>{
  window.scrollTo({top:0, behavior:"smooth"});
 }   


  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>  
    { topbar &&
    <button onClick={totopfunc} className='bg-[#3461FF] rounded-[50px] fixed right-5 bottom-5 text-white p-3 text-[25px] z-50'><BsRocketFill/></button>}
    </div>
  );
}

export default App;
