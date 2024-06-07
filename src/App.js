import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';
import dog from "./db.json";


function App() {
  const [dogs, setDogs] = useState({
    data: null,
  })

  useEffect(() => {
    async function loadDogs() {
      const response = await axios.get(dog)
      setDogs({
        data: response.data
      })
    }
    loadDogs()
  }, [])
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <div>
          <Routes dog={dog.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
