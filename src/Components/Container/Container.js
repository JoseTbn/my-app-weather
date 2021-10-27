import React from 'react'
import './container.css'
import 'antd/dist/antd.css'
import  { Input  } from 'antd';
const { Search } = Input;

export default function Container() {
  return (
    <>
    <div className="container">
<div className="container--card">
    <h1 style={{color:'#ffffffd0'}}>Wheather</h1>
    
    <div>
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
   </div>
 

    
    </div>

    </div>
   
   
    </>
  

 ) 
}