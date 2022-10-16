import { useState } from "react";
import { useHistory } from "react-router-dom";
const Contact = () => {
  const [name, setName ]= useState()  //...state define..
  const [email, setEmail]= useState()
  const [contact, setContact]= useState()
  const [address, setAddress]= useState()

  const history =useHistory()

  const handlesubmit=(nitya)=>{
    nitya.preventDefault();
    const record={name, email, contact, address};
    fetch("http://localhost:8008/employee",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(record)
    }).then(()=>{
      console.log("successfu")
      history.push("/")
    })

  }
  
  return (
    <div>
      <form onSubmit={handlesubmit}> 
        <div className="form-input">
          <h4 className="text-center">Add New Data</h4>
          
        <input type ="text" onChange={(e)=>setName(e.target.value)} placeholder ="Enter your Name"/>
        <input type ="email" onChange={(e)=>setEmail(e.target.value)} placeholder ="Enter your Email"/>
        <input type ="text" onChange={(e)=>setContact(e.target.value)} placeholder ="Enter your Contact"/>
        <input type ="text" onChange={(e)=>setAddress(e.target.value)} placeholder ="Enter your Address"/>
        <br/><br/>
       <button>Submit</button>
       </div>
      </form>
      

        </div>
  )
}
export default Contact;
