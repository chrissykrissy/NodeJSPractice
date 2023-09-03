import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import NoMatch from "./NoMatch";
//import { AuthProvider } from "./Auth/Auth.js";
//import { RequireAuth } from "./Auth/RequireAuth.js"
import ProjectsPage from "./Projects";

const RoutesTree = () => {
    return (
            <Routes>
                <Route path="/login" element={<Login/>}>
                </Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="*" element={<NoMatch/>}></Route>
            </Routes>
    );
}

export default RoutesTree;