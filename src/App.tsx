import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div><Header /></div>
     Hello, samurai! Let's go! Everything will be FINE! START FLYING!
        <ul>
            <li>Stand your ground</li>
            <li>Step by step</li>
            <li>Never give UP</li>
        </ul>
    </div>
  );
}


function Header() {
    return (
        <div>
            <ul className="page-header">
                <li><a>Home</a></li>
                <li><a>News</a></li>
                <li><a>Current</a></li>
            </ul>
        </div>
    );
}

export default App;
