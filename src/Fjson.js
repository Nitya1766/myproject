import { useEffect, useState } from 'react';
import './App.css';
// import PostForm from './Postform';

function App() {
  const [data, setData]=useState([])
  
  useEffect(() =>{
    fetch("http://localhost:8008/employee").then((res)=>{
      return res.json()
    }).then((result)=>{
  
   setData(result)
    })
  },[])
  return (
   <div>
    <h1>fetching data</h1>
    {
      data.map((items)=>{
        return(
          <div>
            <ul>
              <li>{items.name}</li>
              <li>{items.age}</li>
              <li>{items.address}</li>
              
            </ul>
          </div>
        )
      })
    }
    {/* <PostForm/> */}
   </div>
  );
}

export default App;
