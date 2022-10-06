import {useState , useEffect} from "react";

import logo from './logo.svg';
import Post from './components/post'
import './App.css';

function App() {
  useEffect(() =>{
    axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
      .then(response => {
        console.log("response :", response);
      })
      .catch(err => {
        console.log("error :", err);

      })

  },[])




  return (
    <div className="App">
      <Post name="Ahmed Raza" /> 
      
    </div>
  );
}

export default App;
