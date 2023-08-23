import { useState } from "react";
import { IP } from './config.js';
import { useNavigate } from "react-router-dom";

const AddSite = () => {

    let navigate = useNavigate()

    const [site, setSite] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [suburb, setSuburb] = useState('');
    const [city, setCity] = useState('');
    const [post, setPost] = useState('');
    const [province, setProvince] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            site: site,
            latitude: latitude,
            longitude: longitude,
            building: building,
            street: street,
            number: number,
            suburb: suburb,
            city: city,
            post: post,
            province: province
        };
        fetch(IP + '/addsite', {
            method: 'POST',
            headers: { "Authorization": 'Basic',
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": 'true'},
            body: JSON.stringify(form),
            mode: "cors",
            credentials: "include"
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data)
            if ('error' in data) {
                alert(data['error'])
            } else if ('msg' in data) {
                alert(data['msg']);
                navigate('/sites')
            }
        })
    }

    return (  
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
        <div className="border card-body">
            <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Site</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Site Name"  
                            required
                            value = { site }
                            onChange={(e) => setSite(e.target.value)}
                            />
                    </div>
                
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Latitude</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Latitude"
                            required
                            value = { latitude }
                            onChange={(e) => setLatitude(e.target.value)} 
                            />
                    </div>

                    <div className="form-contro flex-auto">
                        <label className="label">
                            <span className="label-text">Longitude</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Longitude"
                            required
                            value = { longitude }
                            onChange={(e) => setLongitude(e.target.value)} 
                            />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Building Name</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Building Name"
                            // required
                            value = { building }
                            onChange={(e) => setBuilding(e.target.value)} 
                        />
                    </div> 
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Street</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Street"
                            required
                            value = { street }
                            onChange={(e) => setStreet(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Number</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Number"
                            required
                            value = { number }
                            onChange={(e) => setNumber(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Suburb</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Suburb"
                            // required
                            value = { suburb }
                            onChange={(e) => setSuburb(e.target.value)} 
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">City</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="City"
                            required
                            value = { city }
                            onChange={(e) => setCity(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Post Code</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Post Code"
                            required
                            value = { post }
                            onChange={(e) => setPost(e.target.value)} 
                        />
                    </div>
                    
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Province</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Province"
                            required
                            value = { province }
                            onChange={(e) => setProvince(e.target.value)} 
                        />
                    </div>
                </div>
                
                <div className="form-control mt-2">
                    <button className="btn btn-accent w-full max-w-xs">Save</button>
                </div>
            </form>
        </div>
        // </div>
        // </div>
    );
}
 
export default AddSite;
