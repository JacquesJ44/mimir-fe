import { useState } from "react";
import { Link } from 'react-router-dom';
import { IP } from './config.js';

const Circuits = () => {
    const [vendor, setVendor] = useState('');
    const [circuitType, setCircuitType] = useState('');
    const [circuitNumber, setCircuitNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [siteA, setSiteA] = useState('');
    const [siteB, setSiteB] = useState('');
    const [status, setStatus] = useState('');

    const contract_status = ['Active', '<3 Months', 'Out of Contract', 'Cancelled'
        // { 
        //     status: ['active', '<3 months', 'out of contract', 'cancelled'],
        //     colour: ['green', 'orange', 'red', 'purple']
               
        // }
    ]

    const [data, setData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            vendor: vendor,
            circuitType: circuitType,
            circuitNumber: circuitNumber,
            startDate: startDate,
            siteA: siteA,
            siteB: siteB,
            status: status,
        };
        fetch(IP + '/circuits', {
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
            } else {
                setData(data);
            }
        })
    }

    return ( 
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
            <div className="border card-body">
                <div className="border flex justify-end max-w">
                    <Link to='/addcircuit' className="btn btn-accent">Add Circuit</Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="border flex items-justify mt-5">
                    <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Vendor</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Vendor"  
                            // required
                            value = { vendor }
                            onChange={(e) => setVendor(e.target.value)}
                            />
                    </div>

                    <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Circuit Type</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Circuit Type"
                            // required
                            value = { circuitType }
                            onChange={(e) => setCircuitType(e.target.value)} 
                        />
                    </div>

                    {/* <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Speed</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Speed"
                            required
                            value = { speed }
                            onChange={(e) => setSpeed(e.target.value)} 
                        />
                    </div> */}

                    <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Circuit Number</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Circuit Number"
                            // required
                            value = { circuitNumber }
                            onChange={(e) => setCircuitNumber(e.target.value)} 
                        />
                    </div>

                    <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Start Date</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="date" 
                            placeholder="Start Date"
                            // required
                            value = { startDate }
                            onChange={(e) => setStartDate(e.target.value)} 
                        />
                    </div>

                    {/* <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Contract Term</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Contract Term"
                            required
                            value = { contractTerm }
                            onChange={(e) => setContractTerm(e.target.value)} 
                        />
                    </div> */}

                    {/* <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Last Day of Contract</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="date" 
                            placeholder="Last Day of Contract"
                            required
                            value = { lastDay }
                            onChange={(e) => setLastDay(e.target.value)} 
                        />
                    </div> */}

                    <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Site A (Node/DC)</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Site A (Node/DC)"
                            // required
                            value = { siteA }
                            onChange={(e) => setSiteA(e.target.value)} 
                        />
                    </div>

                    <div className="form-control mx-1">
                        <label className="label">
                            <span className="label-text">Site B (Client)</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Site B (Client)"
                            // required
                            value = { siteB }
                            onChange={(e) => setSiteB(e.target.value)} 
                        />
                    </div>
                    
                    <div className="form-control flex-auto">
                        <label htmlFor="vendor" className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <select onChange={(e) => {setStatus(e.target.value)}} id="status" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                            <option value='null'>Choose status...</option>
                                {contract_status.map((c, index) => {
                                    return (
                                        <option key={index} value={c}>{c}</option>
                                    )
                                })}
                        </select>
                    </div>

                    <div className="form-control mt-9 ml-1">
                        <button className="btn btn-accent w-full max-w-xs">Search</button>
                    </div>
                    </div>
                </form>

                <div className="border flex font-sans">
            <table className="flex-auto table-auto border border-collapse my-10">
                {/* <thead>
                    <tr>
                    <th className="border border-slate-600">ID</th>
                    <th className="border border-slate-600">Type A</th>
                    <th className="border border-slate-600">Type B</th>
                    <th className="border border-slate-600">Deliver again from</th>
                    <th className="border border-slate-600">Start from</th>
                    <th className="border border-slate-600">Name</th>
                    <th className="border border-slate-600">Surname</th>
                    <th className="border border-slate-600">Email</th>
                    <th className="border border-slate-600">Send notification</th>
                    <th className="border border-slate-600">Forward Parcels</th>
                    <th className="border border-slate-600">Infopost</th>
                    <th className="border border-slate-600">Additional Contacts</th>
                    <th className="border border-slate-600">From Address</th>
                    <th className="border border-slate-600">To Address</th>
                    <th className="border border-slate-600">Date Created</th>
                    <th className="border border-slate-600">Paid</th>
                    <th className="border border-slate-600">Term (Months)</th>
                    <th className="border border-slate-600">Status</th>
                    </tr>
                </thead> */}
                <tbody>
                    {data && data.map((c) => (
                        <tr key={c.id}>
                            <td className="border border-slate-700">{c.vendor}</td> 
                            <td className="border border-slate-700">{c.circuit_type}</td> 
                            <td className="border border-slate-700">{c.circuit_number}</td> 
                            <td className="border border-slate-700">{c.start_date}</td> 
                            <td className="border border-slate-700">{c.siteA}</td> 
                            <td className="border border-slate-700">{c.siteB}</td> 
                            {/* <td className="border border-slate-700">{c.suburb}</td> 
                            <td className="border border-slate-700">{c.city}</td> 
                            <td className="border border-slate-700">{c.postcode}</td> 
                            <td className="border border-slate-700">{c.province}</td> */}
                            <td>
                                <Link to={'/viewcircuit/' + c.id} className="btn btn-accent">View</Link>
                                {/* <button className="btn btn-accent w-full max-w-xs">View</button>  */}
                            </td>    
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            </div>
        // </div>
        // </div>
     );
}
 
export default Circuits;