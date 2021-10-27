import './App.css';
import React ,{useState , useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchweather } from './redux/slices/wslices';

import 'antd/dist/antd.css'
import  { Input  } from 'antd';
const { Search } = Input;

function App() {
  const [city, setCity] = useState("Brussels");

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchweather (""));
}, []);


const state = useSelector(state => state);
  const { weather, loading, error } = state;
  console.log(state);

  const onSearch = value => console.log(value);

    
  
    return (
    <>
    <div className="container">
<div className="container--card">
    <h1 style={{color:'#ffffffd0',textAlign:'center'}}>Wheather</h1>
    
    <div>
    <Search value={city}  
    onChange={(e)=>setCity(e.target.value)} 
    placeholder="Search your city" 
    onSearch={onSearch} 
    onClick={()=>dispatch(fetchweather(city))}
    enterButton />
   </div>
 
<h1  style={{color:'#ffffffd0',textAlign:'center'}}>setCity</h1>
    
    </div>

    </div>
   
   
    </>
  

  
  );
}

export default App;
