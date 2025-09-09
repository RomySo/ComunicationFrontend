import React, { useState } from "react";
import axios from "axios"; 





function Dashboard(){
    const [username, setName] = useState('');
    const [response, setResponse] = useState('');

    const handlesubmit=async (e)=>{
    e.preventDeafault();
    const regex=/^[a-zA-Z\s]{2,30}$/;

    if(!regex.test(username)){
        alert("The name that ou entered is invalid");
        return ; 
    }
    try{
        const res=await axios.post('/api/customers',{username});
        setResponse(res.data.name);
    }catch(err){
        alert('Somthing went wrong');
    }
};

    return(
        <div>
           <form onSubmit={handlesubmit}>
                <label>customer name:</label>
                <input
                type="text"
                value={username}
                onChange={(e)=> setName(e.target.value)}
                required
                ></input>
                <button type="submit">add Customer</button>
            </form> 
                 {response && (
        <p>new customer was adedd <span>{response}</span></p>
        
    )}
        </div>
    
);  

}



export default Dashboard;