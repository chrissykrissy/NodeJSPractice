import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    return(
        <div className="Login">
            <header className="Login-header">
                <h1>Home Page</h1>
                <div>
                    <p>Welcome to the Home Page</p><br></br>
                    <button onClick={()=> navigate("Login")}>Login Page</button><br></br>
                    <button onClick={()=> navigate("projects")}>Projects Page</button>
                </div>
            </header>
        </div>
    );
}

export default HomePage;