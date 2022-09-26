import React from 'react';
import './App.css';

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

const Header = () => {
    return (
        <div>
            <ul className="page-header">
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Current</a></li>
            </ul>
        </div>
    );
}

const Recomendations = () => {
    return (
        <div>
            <p className="important">You CAN do it, just follow these directions:</p>
            <ul>
                <li>Stand your ground</li>
                <li>Step by step</li>
                <li>Never give UP</li>
            </ul>
        </div>
    );
}

const Welcome = () => {
    return (
        <div>
        <h1>Hello, samurai! Let's go! Everything will be FINE! START FLYING!</h1>
        <div className="break_line"></div>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <p className="important">Need to know:</p>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ol>
        </div>
    );
}

export default App;
