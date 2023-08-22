import { useState } from "react";
import { Link } from 'react-router-dom';
import { IP } from './config.js';

const Sites = () => {
    const [customer, setCustomer] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    // const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    // const [number, setNumber] = useState('');
    const [suburb, setSuburb] = useState('');
    const [city, setCity] = useState('');
    // const [post, setPost] = useState('');
    // const [province, setProvince] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            customer: customer,
            latitude: latitude,
            longitude: longitude,
            street: street,
            suburb: suburb,
            city: city
        };
        fetch(IP + '/sites', {
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
            } 
            // else if ('msg' in data) {
            //     alert(data['msg']);
                // navigate('/sites')
            // }
        })
    }

    return ( 
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
        <div className="border card-body">
        <div className="border flex justify-end max-w">
            <Link to='/addsite' className="btn btn-accent">Add Site</Link>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="border flex items-justify mt-5">
            <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Customer</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Customer"
                    // required
                    value = { customer }
                    onChange={(e) => setCustomer(e.target.value)} 
                />
            </div>

            <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Latitude</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Latitude"  
                    // required
                    value = { latitude }
                    onChange={(e) => setLatitude(e.target.value)}
                    />
            </div>

            <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Longitude</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Longitude"
                    // required
                    value = { longitude }
                    onChange={(e) => setLongitude(e.target.value)} 
                />
            </div>

            {/* <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Building Name</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Building Name"
                    required
                    value = { building }
                    onChange={(e) => setBuilding(e.target.value)} 
                />
            </div> */}

            <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Street</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Street"
                    // required
                    value = { street }
                    onChange={(e) => setStreet(e.target.value)} 
                />
            </div>

            {/* <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Building Number</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="date" 
                    placeholder="Building Number"
                    required
                    value = { number }
                    onChange={(e) => setNumber(e.target.value)} 
                />
            </div> */}

            <div className="form-control mx-1">
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

            <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">City</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="City"
                    // required
                    value = { city }
                    onChange={(e) => setCity(e.target.value)} 
                />
            </div>

            {/* <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Postal Code</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Postal Code"
                    required
                    value = { post }
                    onChange={(e) => setPost(e.target.value)} 
                />
            </div> */}

            {/* <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Province</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Province"
                    // required
                    value = { province }
                    onChange={(e) => setProvince(e.target.value)} 
                />
            </div> */}

            <div className="form-control mt-9 ml-1">
                <button className="btn btn-accent w-full max-w-xs">Search</button>
            </div>
            </div>
        </form>
        </div>
        // </div>
        // </div>
     );
}
 
export default Sites;