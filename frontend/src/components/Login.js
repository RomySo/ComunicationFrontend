import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={};':"\\|,.<>/?]).{10,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!username.trim()){
            newErrors.username = "Username is required";
        }
        if (!password){
            newErrors.password = "Password is required";
        }else if (password.length < 10){
            newErrors.password = "Password must be at least 10 characters";
        }else if (!passwordRegex.test(password)){
            newErrors.password = "Password must contain uppercase,lowercase,number,and spacial characters";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0){
            alert("Form submitted successfully!");
        }
    };
    return(
        <div style={{maxWidth:'400px', margin:'50px auto', padding:'50px', border:'1px solid #ccc', borderRadius: '8px'}}>
        <h2 style={{textAlign:'center'}}>Login</h2>
        <form onSubmit={handleSubmit}>
           <div style={{marginBottom:'15px', marginRight:'10px'}}>
            <label>Username</label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=> setUsername(e.target.value)} style={{width:'100%', padding:'8px'}} />
            {errors.username && (<p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>)}
           </div> 
           <div style={{marginBottom:'15px', marginRight:'10px'}}>
            <label>Password</label>
            <input type="text" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} style={{width:'100%', padding:'8px'}} />
            {errors.password && (<p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>)}
           </div> 
           {/*check where is the next window after login is dashboard or other for nevigation */}
           <button type="submit" style={{width:'100%', padding:'10px', backgroundColor:'#3498db', color:'#fff', border:'none', borderRadius:'5px'}}  >
            Login
           </button>
           <button type="button" onClick={()=> navigate("/register")}>
            Sign Up
            </button>
            <button type="button" onClick={()=> navigate("/forgotpassword")}>
                Forgot Password
            </button>
        </form>
    </div>
    );
}


export default Login;