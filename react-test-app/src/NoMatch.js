import {useNavigate} from "react-router-dom";

function NoMatch(){
    const navigate = useNavigate();
    return (
        <>
           <h1>No Pages Matching your endpoint</h1>
           <button onClick={() => navigate("/")}>Go Back Home</button>
        </>
    )
}

export default NoMatch;