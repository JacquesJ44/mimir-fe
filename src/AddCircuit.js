import { useState } from "react";
import { IP } from './config.js';

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
    
    const [options, setOptions] = useState([]);
    // const [selectedOption, setSelectedOption] = useState('');

    const fetchData = (value) =>{
            fetch(IP + '/getsite', {
                method: 'POST',
                headers: { "Authorization": 'Basic',
                    "Content-Type": 'application/json',
                    "Access-Control-Allow-Origin": 'true'},
                body: JSON.stringify(value),
                mode: "cors",
                credentials: "include"
            }).then(res => {
                // console.log(res)
                return res.json()
            }).then(data => {
                console.log(data)
                setOptions(data)
            })
    }

    const handleChangeA = (value) => {
        fetchData(value);
        setSiteA(value);
    }
    
    const handleChangeB = (value) => {
        fetchData(value);
        setSiteB(value);
    }

    const vendors = [
        // {label: "Vendor", value: 'null'},
        {label: "DFA", value: "DFA"},
        {label: "Seacom", value: "Seacom"},
        {label: "Comsol", value: "Comsol"},
        {label: "Frogfoot", value: "Frogfoot"},

    ]

    const circuitTypes = [
        // {label: "Circuit Type", value: 'null'},
        {label: "Helios", value: "Helios"},
        {label: "Magellan", value: "Magellan"},
        {label: "Calypte", value: "Calypte"},
        {label: "GPON", value: "GPON"},
        {label: "CX Broadband", value: "CX Broadband"},
    ]
    
    const speeds = [
        // {label: "Speed", value: 'null'},
        {label: "10Mbps", value: "10Mbps"},
        {label: "20Mbps", value: "20Mbps"},
        {label: "50Mbps", value: "50Mbps"},
        {label: "100Mbps", value: "100Mbps"},
        {label: "200Mbps", value: "200Mbps"},
        {label: "300Mbps", value: "300Mbps"},
        {label: "500Mbps", value: "500Mbps"},
        {label: "800Mbps", value: "800Mbps"},
        {label: "1Gbps", value: "1Gbps"},
        {label: "2Gbps", value: "2Gbps"},
        {label: "3Gbps", value: "3Gbps"},
        {label: "5Gbps", value: "5Gbps"},
        {label: "10Gbps", value: "10Gbps"},
    ]

    const contractTerms = [
        // {label: "Term", value: 'null'},
        {label: "12 Months", value: "12 Months"},
        {label: "24 Months", value: "24 Months"},
        {label: "36 Months", value: "36 Months"},
        {label: "60 Months", value: "60 Months"},
    ]

    const ennis = [
        // {label: "ENNI", value: 'null'},
        {label: "ENI21-0000123", value: "ENI21-0000123"},
        {label: "ENI11-0001059", value: "ENI11-0001059"},
        {label: "GNI21-0000071", value: "GNI21-0000071"},
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
                            <select onChange={(e) => setVendor(e.target.value)} id="vendor" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                                <option value='null'>Choose an option...</option>
                                    {vendors.map((vendormap, index) => {
                                        return (
                                            <option key={index} value={vendormap.value}>{vendormap.label}</option>
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
                            <select onChange={(e) => setCircuitType(e.target.value)} id="circuittype" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                            <option value='null'>Choose an option...</option>
                                    {circuitTypes.map((vendormap, index) => {
                                        return (
                                            <option key={index} value={vendormap.value}>{vendormap.label}</option>
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
                            <select onChange={(e) => setSpeed(e.target.value)} id="speed" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                            <option value='null'>Choose an option...</option>
                                    {speeds.map((vendormap, index) => {
                                        return (
                                            <option key={index} value={vendormap.value}>{vendormap.label}</option>
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
                        <label htmlFor="enni" className="label">
                            <span className="label-text">ENNI</span>
                        </label>
                        {/* <div>  */}
                            <select onChange={(e) => setEnni(e.target.value)} id="enni" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                            <option value='null'>Choose an option...</option>
                                    {ennis.map((vendormap, index) => {
                                        return (
                                            <option key={index} value={vendormap.value}>{vendormap.label}</option>
                                        )
                                    })}
                            </select>
                        {/* </div> */}
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
                            <select onChange={(e) => setContractTerm(e.target.value)} id="contractterm" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                            <option value='null'>Choose an option...</option>
                                    {contractTerms.map((vendormap, index) => {
                                        return (
                                            <option key={index} value={vendormap.value}>{vendormap.label}</option>
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
                            value = {lastDay}
                            onChange={(e) => setLastDay(e.target.value)} 
                        />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label htmlFor="siteA" className="label">
                            <span className="label-text">Site A</span>
                        </label>
                        <div className="flex flex-col">
                            <input onChange={(e) => handleChangeA(e.target.value)} 
                                    list="siteA" 
                                    className="input input-bordered w-full max-w-xs" 
                                    placeholder='Type to search'
                                    autoComplete="off"
                                     />
                           
                             <datalist id='siteA'>
                                {Array.isArray(options) ? options.map((option, index) => {
                                    return <option key={index} value={option.site}>
                                        {option.site}
                                    </option>}
                                )
                                    : []}
                            </datalist>
                        </div>
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="siteB" className="label">
                            <span className="label-text">Site B</span>
                        </label>
                        <div className="flex flex-col">
                            <input onChange={(e) => handleChangeB(e.target.value)} 
                                    list="siteB" 
                                    className="input input-bordered w-full max-w-xs" 
                                    placeholder='Type to search'
                                    autoComplete="off"
                                     />
                           
                             <datalist id='siteB'>
                                {Array.isArray(options) ? options.map((option, index) => {
                                    return <option key={index} value={option.site}>
                                        {option.site}
                                    </option>}
                                )
                                    : []}
                            </datalist>
                        </div>
                    </div>
                </div>
                
                <div className="form-control mt-2">
                    <button className="btn btn-accent w-full max-w-xs">Save</button>
                </div>
            </form>
            <p>{vendor}</p>
            <p>{circuitType}</p>
            <p>{speed}</p>
            <p>{circuitNumber}</p>
            <p>{enni}</p>
            <p>{vlan}</p>
            <p>{startDate}</p>
            <p>{contractTerm}</p>
            <p>{lastDay}</p>
            <p>{siteA}</p>
            <p>{siteB}</p>
        </div>
     );
}
 
export default AddCircuit;