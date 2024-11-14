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
        fetch(IP + '/sites/addsite', {
            method: 'POST',
            headers: { "Authorization": 'Basic',
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": 'true'},
            body: JSON.stringify(form),
            mode: "cors",
            credentials: "include"
        }).then(res => {
            // console.log(res)
            return res.json()
        }).then(data => {
            // console.log(data)
            if ('error' in data) {
                alert(data['error'])
            } else if ('msg' in data) {
                alert(data['msg']);
                navigate('/sites')
            }
        })
    }

    // The below are predefined sets of dropdown menus for province
    const provinces = [
        {label: "Eastern Cape", value: "Eastern Cape"},
        {label: "Free State", value: "Free State"},
        {label: "Gauteng", value: "Gauteng"},
        {label: "KwaZulu-Natal", value: "KwaZulu-Natal"},
        {label: "Limpopo", value: "Limpopo"},
        {label: "Mpumalanga", value: "Mpumalanga"},
        {label: "Northern Cape", value: "Northern Cape"},
        {label: "North West", value: "North West"},
        {label: "Western Cape", value: "Western Cape"},
    ]

    return (          
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="flex">
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

                    <div className="form-control flex-auto">
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
                <div className="flex">
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
                            // required
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
                <div className="flex">
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
                        <label htmlFor="contractterm" className="label">
                            <span className="label-text">Province</span>
                        </label>
                        <select onChange={(e) => {setProvince(e.target.value)}} id="contractterm" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                        <option value="null">Choose an option...</option>
                                {provinces.map((p, index) => {
                                    return (
                                        <option key={index} value={p.value}>{p.label}</option>
                                    )
                                })}
                        </select>
                    </div>
                </div>
                
                <div className="form-control mt-2">
                    <button className="btn btn-accent w-full max-w-xs">Save</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddSite;
