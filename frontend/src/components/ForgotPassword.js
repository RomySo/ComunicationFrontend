import {useState} from "react";
import {useNavigate} from "react-router-dom";


function ForgotPassword(){
    const [email,setEmail] = useState("");
    const [codeSent,setCodeSent] = useState(false);
    const [code,setCode] = useState("");
    const navigate = useNavigate();

    //send code to the server
    const handleSendCode = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/forgot-password",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email}),
        });
        const data = await response.json();
        alert(data.message);
        if(response.ok){
            setCodeSent(true);
        }
    };
    //verify the code that the user get
    const handleVerifyCode = async () => { 
        const response = await fetch("http://localhost:5000/api/verify-code",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,code}),
        });
        const data = await response.json();
        alert(response.message);
        if(data.success){
            navigate("/changepassword",{state:{email}}); 
        }
    };
    return(
        <div>
            <h2>Forgot Password</h2>
            {/*mail send*/}
            {/*showing the place of sending code only if the code wasn't sent already*/}
            {!codeSent && (
                <form onSubmit={handleSendCode}>
                    <input 
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Send code to email</button>  
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
                    />
                    <button onClick={handleVerifyCode}>Verify Code</button>    
                </div>
            )}
        </div>
    );
}


export default ForgotPassword;
