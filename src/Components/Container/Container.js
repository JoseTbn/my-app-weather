import React from 'react'
import './container.css'
import 'antd/dist/antd.css'
import  { Input  } from 'antd';
const { Search } = Input;

export default function Container() {
  
//   const enterButton = (
//       <enterButton style={{
//           background: '#000000df',
//       }}
//       />
      
//   );
  
    const onSearch = value => console.log(value);
  
    return (
    <>
    <div className="container">
<div className="container--card">
    <h1 style={{color:'#ffffffd0'}}>Wheather</h1>
    
    <div>
    <Search placeholder="Search your city" onSearch={onSearch} enterButton />
   </div>
 

    
    </div>

    </div>
   
   
    </>
  

 ) 
}