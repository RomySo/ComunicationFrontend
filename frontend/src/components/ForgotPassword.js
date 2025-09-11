import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { sendForgotPasswordCode,verefyForgotPasswordCode } from "../api/api";


function ForgotPassword(){
    const [email,setEmail] = useState("");
    const [codeSent,setCodeSent] = useState(false);
    const [code,setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    //send code to the server
    const handleSendCode = async (e) => {
        e.preventDefault();
        setError("");
        try{
            const data = await sendForgotPasswordCode(email);
            alert(data.message);
            setCodeSent(true);
        }catch(err){
            setError(err.message);
        }
    };
    //verify the code that the user get
    const handleVerifyCode = async () => { 
        setError("");
        try{
            const data = await verefyForgotPasswordCode(email,code);
            alert(data.message);
            if (data.success){
                navigate("/changepassword", {state:{email}});
            }
        }catch(err){
            setError(err.message);
        }
    };
    return(
        <div style={{ maxWidth: "400px", margin: "50px auto", padding: "30px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Forgot Password</h2>
            {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
            {/*mail send*/}
            {/*showing the place of sending code only if the code wasn't sent already*/}
            {!codeSent && (
                <form onSubmit={handleSendCode}>
                    <input 
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                    <button type="submit" style={{ width: "100%", padding: "10px" }}>Send code to email</button>  
                </form>
            )}
            {/*code verification*/}
            {/*showing the field where need to insert the code that the user got only if the code sent already*/}
            {codeSent && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter code from email"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                    <button onClick={handleVerifyCode} style={{ width: "100%", padding: "10px" }}>Verify Code</button>    
                </div>
            )}
        </div>
    );
}


export default ForgotPassword;
