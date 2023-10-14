import { IP } from './config.js';
import { useAuth } from "./Auth";

const Logout = () => {
    const { user, setUser } = useAuth();

    fetch(IP + '/logout', {
            method: 'GET',
            headers: { "Authorization" : 'Basic',
                       "Content-Type" : 'application/json',
                       "Access-Control-Allow-Origin": 'true'},
            mode: 'cors',
            credentials: 'include',
        }).then(res => {
            setUser(null);
            // console.log(res.status);
            res.json().then(data => {
            // console.log(data)
        });
    })
    
    return (  
        <div className="logout">
            <h2>You have been logged out</h2>
        </div>
    );
}
 
export default Logout;