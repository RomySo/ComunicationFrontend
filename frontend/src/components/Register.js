import React from "react";


function Register(){
    

    return(
        <div style={{maxWidth:'400px', margin:'50px auto', padding:'50px', border:'1px solid #ccc', borderRadius: '8px'}}>
            <h2 style={{textAlign:'center'}}>Register</h2>
            <form>
               <div style={{marginBottom:'15px', marginRight:'10px'}}>
                <label>Username</label>
                <input type="text" placeholder="Enter username" style={{width:'100%', padding:'8px'}} />
               </div>
               <div style={{marginBottom:'15px', marginRight:'10px'}}>
                <label>Email</label>
                <input type="text" placeholder="Enter email" style={{width:'100%', padding:'8px'}} />
               </div> 
               <div style={{marginBottom:'15px', marginRight:'10px'}}>
                <label>Password</label>
                <input type="text" placeholder="Enter password" style={{width:'100%', padding:'8px'}} />
               </div> 
               <div style={{marginBottom:'15px', marginRight:'10px'}}>
                <label>Confirm Password</label>
                <input type="text" placeholder="Confirm password" style={{width:'100%', padding:'8px'}} />
               </div>
               <button type="submit" style={{width:'100%', padding:'10px', backgroundColor:'#3498db', color:'#fff', border:'none', borderRadius:'5px'}}  >
                Register
               </button>
            </form>
        </div>
    );
}


export default Register;