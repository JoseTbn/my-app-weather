import './App.css';
import React ,{useState , useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import Container from './Components/Container/Container';
import { fetchweather } from './redux/slices/wslices';

function App() {
  const [city, setCity] = useState("chicago");

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchweather ("new york"));
}, []);


const state = useSelector(state => state);
  const { weather, loading, error } = state;
  console.log(state);

  return (
    <div className="App">
     <Container/>
    </div>
  );
}

export default App;
