import {useState ,useEffect } from "react";
import axios from "axios";
import logo from './logo.svg';
import Post from './components/post'
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
      .then(response => {
        console.log("response :", response.data);
        setPosts(response.data);

      })
      .catch(err => {
        console.log("error :", err);

      })

  },[])




  return (
    <div className="App">

      <Post name="Ahmed Raza" />
      // {
      //   posts.map((eachPost , i)=>{

      //     <>
      //         <Post name={eachPost.name}></Post>
      //     </>
      //   })
      // }
      
    </div>
  );
}

export default App;
