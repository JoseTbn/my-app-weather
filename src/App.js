import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchweather } from "./redux/slices/wslices";

import "antd/dist/antd.css";
import { Input } from "antd";
const { Search } = Input;

function App() {
  const [city, setCity] = useState("Brussels");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchweather(""));
  }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  console.log(state);

  const onSearch = (value) => console.log(value);

  return (
    <>
      <div className="container">
        <div className="container--card">
          <h1 style={{ color: "#ffffffd0", textAlign: "center" }}>Wheather</h1>

          <form>
            <Search
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search your city"
              onSearch={onSearch}
              onClick={() => dispatch(fetchweather(city))}
              enterButton
            />
          </form>

          <h1 style={{ color: "#ffffffd0", textAlign: "center" }}>{city}</h1>
          <div className="conatiner--data">
            <p className="temp-wrapper">
              <span className="temp"> 12 </span>
              <span className="temp-symbol">°C</span>
            </p>
            <p className="temp-wrapp">
              <span className="temp"> 12 </span>
              <span className="temp-symbol">°C</span>
            </p>
            <p className="somth">
              <span className="temp"> 12 </span>
              <span className="temp-symbol">°C</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
