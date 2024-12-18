import { useState } from "react";
import { Link } from 'react-router-dom';
import { IP } from './config.js';

const Sites = () => {
    const [site, setSite] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    // const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    // const [number, setNumber] = useState('');
    const [suburb, setSuburb] = useState('');
    const [city, setCity] = useState('');
    // const [post, setPost] = useState('');
    const [province, setProvince] = useState('');

    const [data, setData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            site: site,
            latitude: latitude,
            longitude: longitude,
            street: street,
            suburb: suburb,
            city: city,
            province: province,
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
            // console.log(res)
            return res.json()
        }).then(data => {
            // console.log(data)
            if ('error' in data) {
                alert(data['error'])
            } else {
                setData(data);
            }
        })
    }

    return ( 
    <>
        <div className="card-body">
        <div className="flex justify-end max-w">
            <Link to='/sites/addsite' className="btn btn-accent">Add Site</Link>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="flex items-justify mt-5">
            <div className="form-control mx-1">
                <label className="label">
                    <span className="label-text">Site</span>    
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    type="text" 
                    placeholder="Site name"
                    // required
                    value = { site }
                    onChange={(e) => setSite(e.target.value)} 
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

            <div className="form-control mx-1">
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
            </div>

            <div className="form-control mt-9 ml-1">
                <button className="btn btn-accent w-full max-w-xs">Search</button>
            </div>
            </div>
        </form>
        {/* </div> */}

        <div className="flex font-sans">
            <table className="flex-auto table-auto border-collapse my-10">
                <tbody>
                    {data && data.map((site) => (
                        <tr key={site.site}>
                            <td className="border border-slate-700">{site.site}</td> 
                            <td className="border border-slate-700">{site.latitude}</td> 
                            <td className="border border-slate-700">{site.longitude}</td> 
                            <td className="border border-slate-700">{site.building}</td> 
                            <td className="border border-slate-700">{site.street}</td> 
                            <td className="border border-slate-700">{site.number}</td> 
                            <td className="border border-slate-700">{site.suburb}</td> 
                            <td className="border border-slate-700">{site.city}</td> 
                            <td className="border border-slate-700">{site.postcode}</td> 
                            <td className="border border-slate-700">{site.province}</td>
                            <td>
                                <Link to={'/sites/viewsite/' + site.site} className="btn btn-accent">View</Link>
                                {/* <button className="btn btn-accent w-full max-w-xs">View</button>  */}
                            </td>    
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </>
     );
}
 
export default Sites;