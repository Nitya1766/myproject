import { useEffect, useState } from 'react';
 function ViewData() {
   const [data, setData]=useState([])
   const getData =async()=>{
    const res = await fetch("http://localhost:8008/employee");
    const record = await res.json();
    setData(record);
}
useEffect(()=>{
    getData()
},[]);
   const deletbutton=(id)=>{
    fetch(`http://localhost:8008/employee/${id}`,{
      method:"DELETE"
    }).then(()=>{
      console.log("DELETE")
      getData()
    })
   }
   return (
    <div>
     <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
         <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
       data.map((items)=>{
         return(
          
             <tr key={items.id}>
               <td>{items.name}</td>
               <td>{items.email}</td>
               <td>{items.contact}</td>
               <td>{items.address}</td>
                <td className='btn' onClick={()=>deletbutton(items.id)}>X</td>
             </tr>
         
         )
       })
     }
   
      </tbody>
     </table>
     </div>
   )
  }
 export default ViewData;