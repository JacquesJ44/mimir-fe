import { useState } from "react";
import { Link } from 'react-router-dom';

const Circuits = () => {
    const [vendor, setVendor] = useState('');
    const [circuitType, setCircuitType] = useState('');
    // const [speed, setSpeed] = useState('');
    const [circuitNumber, setCircuitNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    // const [contractTerm, setContractTerm] = useState('');
    // const [lastDay, setLastDay] = useState('');
    const [siteA, setSiteA] = useState('');
    const [siteB, setSiteB] = useState('');


    return ( 
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
            <div className="border card-body">
                <div className="border flex justify-end max-w">
                    <Link to='/addcircuit' className="btn btn-accent">Add Circuit</Link>
                </div>

                <form>
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
 
export default Circuits;