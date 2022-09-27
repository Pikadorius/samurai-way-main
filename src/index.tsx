import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



ReactDOM.render(
    <App />,
  document.getElementById('root')
);


let user = {
    name: "Egor",
    age: 30,
    address: {
        city: "Minsk",
        country: "Belarus",
    },
}

console.log(user.address.city);