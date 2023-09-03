import { useState } from "react";

const AddCircuit = () => {
    
    // const [value, setValue] = useState('')
    
    const [vendor, setVendor] = useState('');
    const [circuitType, setCircuitType] = useState('');
    const [speed, setSpeed] = useState('');
    const [circuitNumber, setCircuitNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [contractTerm, setContractTerm] = useState('');
    const [lastDay, setLastDay] = useState('');
    const [siteA, setSiteA] = useState('');
    const [siteB, setSiteB] = useState('');
    const [vlan, setVlan] = useState('');
    const [enni, setEnni] = useState('');

    const vendors = [
        {id: 0, label: "DFA", value: "DFA"},
        {id: 1, label: "Seacom", value: "Seacom"},
        {id: 2, label: "Comsol", value: "Comsol"},
        {id: 3, label: "Frogfoot", value: "Frogfoot"},

    ]

    const circuitTypes = [
        {id: 0, label: "Magellan", value: "Magellan"},
        {id: 1, label: "Calypte", value: "Calypte"},
        {id: 2, label: "GPON", value: "GPON"},
        {id: 3, label: "CX Broadband", value: "CX Broadband"},
    ]
    
    const speeds = [
        {id: 0, label: "10Mbps", value: "10Mbps"},
        {id: 1, label: "20Mbps", value: "20Mbps"},
        {id: 2, label: "50Mbps", value: "50Mbps"},
        {id: 3, label: "100Mbps", value: "100Mbps"},
    ]

    const contractTerms = [
        {id: 0, label: "12 Months", value: "12 Months"},
        {id: 1, label: "24 Months", value: "24 Months"},
        {id: 2, label: "36 Months", value: "36 Months"},
        {id: 3, label: "60 Months", value: "60 Months"},
    ]

    



    return ( 
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
        <div className="border card-body">
            <form>
                {/* Row 1 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label htmlFor="vendor" className="label">
                            <span className="label-text">Vendor</span>
                        </label>
                        {/* <div>  */}
                            <select onChange={(e) => setVendor(e.target.value)} id="vendor" className="input input-bordered w-full max-w-xs">
                                    {vendors.map(vendormap => {
                                        return (
                                            <option key={vendormap.id} value={vendormap.value}>{vendormap.label}</option>
                                        )
                                    })}
                            </select>
                        {/* </div> */}
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="circuittype" className="label">
                            <span className="label-text">Circuit Type</span>
                        </label>
                        {/* <div>  */}
                            <select onChange={(e) => setCircuitType(e.target.value)} id="circuittype" className="input input-bordered w-full max-w-xs">
                                    {circuitTypes.map(vendormap => {
                                        return (
                                            <option key={vendormap.id} value={vendormap.value}>{vendormap.label}</option>
                                        )
                                    })}
                            </select>
                        {/* </div> */}
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="speed" className="label">
                            <span className="label-text">Speed</span>
                        </label>
                        {/* <div>  */}
                            <select onChange={(e) => setSpeed(e.target.value)} id="speed" className="input input-bordered w-full max-w-xs">
                                    {speeds.map(vendormap => {
                                        return (
                                            <option key={vendormap.id} value={vendormap.value}>{vendormap.label}</option>
                                        )
                                    })}
                            </select>
                        {/* </div> */}
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Circuit Number</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Circuit Number"
                            required
                            value = { circuitNumber }
                            onChange={(e) => setCircuitNumber(e.target.value)} 
                            />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">ENNI</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="ENNI"
                            required
                            value = { enni }
                            onChange={(e) => setEnni(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">VLAN ID</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="VLAN ID"
                            required
                            value = { vlan }
                            onChange={(e) => setVlan(e.target.value)} 
                        />
                    </div>
                </div>
                {/* Row 3 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Start Date</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="date" 
                            placeholder="Start Date"
                            required
                            value = { startDate }
                            onChange={(e) => setStartDate(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="contractterm" className="label">
                            <span className="label-text">Contract Term</span>
                        </label>
                        {/* <div>  */}
                            <select onChange={(e) => setContractTerm(e.target.value)} id="contractterm" className="input input-bordered w-full max-w-xs">
                                    {contractTerms.map(vendormap => {
                                        return (
                                            <option key={vendormap.id} value={vendormap.value}>{vendormap.label}</option>
                                        )
                                    })}
                            </select>
                        {/* </div> */}
                    </div>

                    <div className="form-control flex-auto">
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
                    </div>
                </div>

                {/* Row 4 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Site A (Node/DC)</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Site A (Node/DC)"
                            required
                            value = { siteA }
                            onChange={(e) => setSiteA(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Site B (Client)</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text" 
                            placeholder="Site B (Client)"
                            required
                            value = { siteB }
                            onChange={(e) => setSiteB(e.target.value)} 
                        />
                    </div>
                </div>
                
                <div className="form-control mt-2">
                    <button className="btn btn-accent w-full max-w-xs">Save</button>
                </div>
            </form>
            <p>{vendor}</p>
            <p>{circuitType}</p>
            <p>{speed}</p>
            <p>{contractTerm}</p>
        </div>
        // </div>
        // </div>
     );
}
 
export default AddCircuit;