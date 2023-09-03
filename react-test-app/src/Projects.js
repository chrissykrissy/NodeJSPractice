import { useNavigate } from "react-router-dom";

function ProjectsPage() {
    const navigate = useNavigate();
    return(
        <div className="Projects">
            <header className="Projects-header">
                <h1>Home Page</h1>
                <div>
                    <p>This is Your Projects Page!</p><br></br>
                </div>
            </header>
        </div>
    );
}

export default ProjectsPage;