import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IP } from "./config.js";


const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            name: name,
            surname: surname,
            email: email, 
            password: password,
            confirmpassword: confirmpassword
        };

        fetch(IP + '/register', {
            method: 'POST',
            headers: {'Authorization': 'Basic',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': 'true'},
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(form)
            }).then(res => {
                console.log(res);
                return res.json()
            }).then(data => {
                console.log(data);
                if ('error' in data) {
                    alert(data['error'])
                } else {  
                    alert(data['msg']) 
                    navigate('/');
                }
            });
    }

    return ( 
        <div className="h-screen flex items-center justify-center border">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Type your name"  
                            required
                            value = { name }
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Surname</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Type your surname"
                            required
                            value = { surname }
                            onChange={(e) => setSurname(e.target.value)} 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="email" 
                            placeholder="Type your email"
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
                            placeholder="Set your password"
                            required
                            value = { password }
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm your password</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="password" 
                            placeholder="Confirm your password"
                            required
                            value = { confirmpassword }
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Register</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default Register;