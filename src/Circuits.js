import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { IP } from './config.js';
import moments from "moment";


const Circuits = () => {
    const [vendor, setVendor] = useState('');
    const [circuitType, setCircuitType] = useState('');
    const [circuitNumber, setCircuitNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [siteA, setSiteA] = useState('');
    const [siteB, setSiteB] = useState('');
    const [status, setStatus] = useState('');
    
    const contract_status = ['Active', 'Cancelled'
        // { 
            //     status: ['active', '<3 months', 'out of contract', 'cancelled'],
            //     colour: ['green', 'orange', 'red', 'purple']
            
            // }
        ]
        
    const {id}  = useParams()
    
    // useEffect(() => {
    //     window.scrollTo(0,0)
    
    //     fetch(IP + '/circuits/' + id, {
    //       method: 'GET',
    //       headers: { "Authorization": 'Basic',
    //                 "Content-Type": 'application/json',
    //                 "Access-Control-Allow-Origin": 'true'},
    //       mode: "cors",
    //       credentials: "include",
    //     }).then((data_) => {
    //       data_.json().then((data__) => {
    //         // console.log(data__);
    //         setData(data__);
    //         // console.log(data.doc);
    //       });
    //     })
    
    //   },[id])

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

    const today = moments(new Date());


    return ( 
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
            <div className="card-body">
                <div className="flex justify-end max-w">
                    <Link to='/addcircuit' className="btn btn-accent">Add Circuit</Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex items-justify mt-5">
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
                        <select onChange={(e) => {setStatus(e.target.value)}} id="status" className="input input-bordered w-full max-w-xs" defaultValue=''>
                            <option value=''>Choose status...</option>
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

                <div className="flex font-sans">
            <table className="flex-auto table-auto border-collapse my-10">
                <tbody>
                    {data && data.map((c) => (
                        <tr key={c.id}>
                            {c.status === 'Cancelled' ?
                            <td className="border border-slate-700 bg-purple-500 w-5"></td>
                            :
                                today.format('YYYY-MM-DD') < c.endDate ?
                                <td className="border border-slate-700 bg-green-500 w-5" ></td>
                                :
                                <td className="border border-slate-700 bg-red-500 w-5"></td>}
                            {/* <td className="border border-slate-700 bg-orange-500 w-5"></td>  */}
                            <td className="border border-slate-700">{c.vendor}</td> 
                            <td className="border border-slate-700">{c.circuitType}</td> 
                            <td className="border border-slate-700">{c.circuitNumber}</td> 
                            <td className="border border-slate-700">{c.enni}</td> 
                            <td className="border border-slate-700">{c.vlan}</td> 
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