import React from 'react';
import './App.css';
import Header from "./Header";
import Welcome from "./Welcome";
import Recomendations from "./Recomendations";
import Technologies from "./Technologies";


function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <Recomendations />
        <Technologies />
    </div>
  );
}

export default App;
