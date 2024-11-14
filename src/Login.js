import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IP } from "./config.js";

import  { useAuth } from "./Auth.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //For Authentication
    const { setUser } = useAuth();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};

        fetch(IP + '/', {
            method: 'POST',
            headers: {'Authorization': 'Basic',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': 'true'},
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(user)
            }).then(res => {
                // console.log(res);
                return res.json()
            }).then(data => {
                if ('msg' in data) {
                    // console.log(data);
                    alert(data['msg'])
                } else {   
                    setUser(data);
                    // console.log(user)
                    navigate('/circuits');
                }
                });
    }

    return (
        <div className="h-screen flex items-center justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="email" 
                            placeholder="Username"  
                            required
                            value = { email }
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="password" 
                            placeholder="Password"
                            required
                            value = { password }
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default Login;