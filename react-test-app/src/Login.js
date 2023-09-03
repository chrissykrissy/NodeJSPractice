
import {useNavigate} from "react-router-dom";
import { useAuth } from "./Auth/Auth.js"
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    // const [user, setUser] = useState('');
    // const auth = useAuth();
    // const handleLogin = () => {
    //     auth.login(user);
    //     navigate('/');
    // }
    return(
        <div className="Login">
            <header className="Login-header">
                <h1>Please Enter Your Login Here</h1>
                <div>
                    <label>Username: </label><input type="text" required></input>
                    <br></br>
                    <label>Password: </label><input type="password" required></input>
                    <br></br>
                    <button onClick={()=>navigate("/")}>Submit</button>
                </div>
            </header>
        </div>
    );
}

export default Login;