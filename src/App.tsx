import React from 'react';
import './App.css';
import Header from "./Header";
import Welcome from "./Welcome";
import Recommendations from "./Recommendations";
import Technologies from "./Technologies";


function App() {
    return (
        <div className="App">
            This is APP component
            <Header/>
            <Welcome/>
            <Recommendations/>
            <Technologies/>
        </div>
    );
}

export default App;
