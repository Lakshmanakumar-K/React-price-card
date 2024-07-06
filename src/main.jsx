/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import jsondata from "./Components/Price_card/data.json"
import Card from './Components/Price_card/Card.jsx'

//console.log(jsondata);
let data = jsondata;
console.log(data);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div className="container">
    <div className="row">
      {data.map((obj) => (
        <Card
          key={obj.type}
          type={obj.type}
          price={obj.price}
          features={obj.features}
        />
      )
      )
      }
    </div>
  </div>
);

