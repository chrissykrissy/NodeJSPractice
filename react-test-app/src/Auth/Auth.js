// import { useState, useContext, createContext, Children } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = () => {
//     const [user, setUser] = useState(null);

//     const login = user => {
//         setUser(user);
//     }

//     const logout = () => {
//         setUser(null);
//     }

//     return (
//     <AuthContext.Provider value={{user, login, logout}}>
//         {this.props.Children}
//     </AuthContext.Provider>
//     );
// }

// export const useAuth = () => {
//     return useContext(AuthContext)
// }