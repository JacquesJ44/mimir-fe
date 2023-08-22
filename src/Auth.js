import { useState, useEffect, useContext, createContext } from "react";
import { IP } from "./config.js";
import { Navigate, Outlet } from "react-router-dom";

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetch(IP + '/circuits', {
            method: 'GET',
            // headers: {'Authorization': 'Basic',
            //           'Content-Type': 'application/json',
            //           'Access-Control-Allow-Origin': 'true'},
            mode: 'cors',
            credentials: 'include'
        }).then((res) => {
            // console.log(res.status)
            if (res.ok) {
                // console.log(res.json())
                return res.json()
            }
            setUser(null);
            // console.log(user);
        }).then((json) => {
            console.log("LOG", json);
            if ('error' in json) {
                setUser(null);
                return {};
            };
            setUser(json);
            // console.log(user);
        }).catch((error) => {
            console.log('something went wrong', error);
            setUser(null);
            // console.log(user);
        });
    }, []);

    return ( 
        <AuthContext.Provider value={ {user, setUser} }>
            {children}
        </AuthContext.Provider>
     );
};
 
export const RequireAuth = () => {
    const { user } = useAuth();
    // const location = useLocation();

    if (user === undefined) return null;

    return user !== null ? <Outlet /> : <Navigate to='/' />;
};