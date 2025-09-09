import React, { useState } from "react";
import axios from "axios"



function ChangePassword(){

    const [newPassword,setNewPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[message,setMessage]=useState("");

    const isPasswordValid=(password)=>{
        const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}[\]~]{10,}$/;
        return regex.test(password);
    }

    const handleSubmit= async(e)=>{
       e.preventDefault();

       if(!isPasswordValid(newPassword)){
    setMessage("Password must be at least 10 characters long and include uppercase, lowercase, number, and special character.")
    }
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      await axios.post("/api/resetpassword", {
        newPassword,
      });

      setMessage("Password changed successfully.");
      setNewPassword("");
      setConfirmPassword("");

    } catch (err) {
      setMessage(" Failed to change password.");
    }
    }

    return(
        <div>
            <h2>Enter new Password</h2>
            <form onSubmit={handleSubmit}>
                <label>new password</label>
                <input
                type="password"
                value={newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}
                required>
                </input>
                <label>Confirm Password</label>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                ></input>
            <button type="submit">Change Password</button>
            </form>
                {message && <p>{message}</p>}

            
        </div>
    );
};


export default ChangePassword;