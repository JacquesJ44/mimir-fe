import { useState } from "react";
import { IP } from './config.js';
import { useNavigate } from "react-router-dom";
import moments from "moment";

const AddCircuit = () => {
    
    // Main form data variables
    const [vendor, setVendor] = useState('');
    const [circuitType, setCircuitType] = useState('');
    const [speed, setSpeed] = useState('');
    const [circuitNumber, setCircuitNumber] = useState('');
    const [enni, setEnni] = useState('');
    const [vlan, setVlan] = useState('');
    const [startDate, setStartDate] = useState('');
    const [contractTerm, setContractTerm] = useState('');
    const [endDate, setEndDate] = useState('');
    const [siteA, setSiteA] = useState('');
    const [siteB, setSiteB] = useState('');
    const [comments, setComments] = useState('');
    const [doc, setDoc] = useState('');

    let navigate = useNavigate();

    // Upon submitting the form we'll: 
    // 1. add all the details as usual and also upload a document
    // 2. upload a document

    // 1. Add all the circuit details
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            vendor: vendor,
            circuitType: circuitType,
            speed: speed,
            circuitNumber: circuitNumber,
            enni: enni,
            vlan: vlan,
            startDate: startDate,
            contractTerm: contractTerm,
            endDate: endDate,
            siteA: siteA,
            siteB: siteB,
            comments: comments,
            doc: doc
        };
        fetch(IP + '/addcircuit', {
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
                navigate('/circuits')
            }
        })
    }
        // 2. Handle the upload of the document and send it to the backend
        const handleUpload = (e) => {
            e.preventDefault()
            const formFile = document.getElementById('formFile')
            const formData = new FormData();
            formData.append('formFile', formFile.files[0]);
            console.log(formFile.files)
            fetch(IP + '/upload', {
                method: 'POST',
                // headers: { "Authorization": 'Basic',
                //     "Content-Type": 'application/pdf',
                //     "Access-Control-Allow-Origin": 'true'},
                body: formData,
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
                    handleSubmit(e)
                }
            })
    }
    
    //     function handleAll(handleUpload() handleSubmit()) {
    //         handleUpload();
    //         if ('err' in handleUpload())
    //             handleSubmit();
    // }

    // The following is for selecting a previously added site to a circuit. It is used for both SiteA and SiteB
    const [options, setOptions] = useState([]);

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

    // Setting Vendor and CircuitType variables for selection in cascading style, followed by fundtions to set in the form defined above 
    const vendors = [
        {
            vendor: 'DFA',
            type: ['Helios', 'Magellan', 'Calypte', 'Peregrin', 'Business Broadband', 'Tachyon']
               
        },
        {
            vendor: 'Seacom',
            type: ['FTTB', 'FTTH']
        },
        {
            vendor: 'Comsol',
            type: ['CX Broadband (PtMP)', 'CX Plus Broadband (PTP)']
            
        },
        {
            vendor: 'Frogfoot',
            type: ['FTTB', 'FTTH']
        }
    ]

    const [circuitTypes, setCircuitTypes] = useState([])

    const changeVendor = (e) => {
        setVendor(e.target.value);
        setCircuitTypes(vendors.find((v) => v.vendor === e.target.value).type);
    }

    const changeCircuitType = (e) => {
        setCircuitType(e.target.value);
    }

    // Working with dates to set the last day of the contract equal to first day plus the contract term
    const lastDayDate = moments(new Date(startDate));
    const lastDay = (value) => {
        setContractTerm(value);
        // console.log(formattedLastDayDate.format('YYYY-MM-DD'));
        const formattedLastDayDate = lastDayDate.add(value, 'months');
        // console.log(formattedLastDayDate.format('YYYY-MM-DD'));
        setEndDate(formattedLastDayDate.format('YYYY-MM-DD'));
        // console.log(endDate);

    }

    // The below are predefined sets of dropdown menus for the rest of the input fields
    const speeds = [
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
        {label: "12 Months", value: "12"},
        {label: "24 Months", value: "24"},
        {label: "36 Months", value: "36"},
        {label: "60 Months", value: "60"},
    ]

    const ennis = [
        {label: "ENI21-0000123", value: "ENI21-0000123"},
        {label: "ENI11-0001059", value: "ENI11-0001059"},
        {label: "GNI21-0000071", value: "GNI21-0000071"},
    ]

    return ( 
        // <div className="h-screen flex items-center justify-center border">
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        
        <div className="border card-body">
            <form onSubmit={(e) => {handleUpload(e)}}>
                {/* Row 1 */}
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label htmlFor="vendor" className="label">
                            <span className="label-text">Vendor</span>
                        </label>
                        <select onChange={changeVendor} id="vendor" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                            <option value='null'>Choose an option...</option>
                                {vendors.map((v, index) => {
                                    return (
                                        <option key={index} value={v.vendor}>{v.vendor}</option>
                                    )
                                })}
                        </select>
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="circuittype" className="label">
                            <span className="label-text">Circuit Type</span>
                        </label>
                        <select onChange={changeCircuitType} id="circuittype" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                        <option value='null'>Choose an option...</option>
                                {circuitTypes.map((c, index) => {
                                    return (
                                        <option key={index} value={c}>{c}</option>
                                    )
                                })}
                        </select>
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="speed" className="label">
                            <span className="label-text">Speed</span>
                        </label>
                        <select onChange={(e) => setSpeed(e.target.value)} id="speed" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                        <option value='null'>Choose an option...</option>
                                {speeds.map((s, index) => {
                                    return (
                                        <option key={index} value={s.value}>{s.label}</option>
                                    )
                                })}
                        </select>
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

                {/* Row 2 - Display only if Vendor is set to 'DFA' */}
                { (vendor === 'DFA') &&
                <div className="border flex">
                    <div className="form-control flex-auto">
                        <label htmlFor="enni" className="label">
                            <span className="label-text">ENNI</span>
                        </label>
                        <select onChange={(e) => setEnni(e.target.value)} id="enni" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                        <option value='null'>Choose an option...</option>
                                {ennis.map((e, index) => {
                                    return (
                                        <option key={index} value={e.value}>{e.label}</option>
                                    )
                                })}
                        </select>
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">VLAN ID</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text"
                            placeholder="VLAN ID"
                            value = { vlan }
                            onChange={(e) => setVlan(e.target.value)} 
                        />
                    </div>
                </div>
                }

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
                        <select onChange={(e) => {lastDay(e.target.value)}} id="contractterm" className="input input-bordered w-full max-w-xs" defaultValue='null'>
                        <option value="null">Choose an option...</option>
                                {contractTerms.map((term, index) => {
                                    return (
                                        <option key={index} value={term.value}>{term.label}</option>
                                    )
                                })}
                        </select>
                    </div>

                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Last Day of Contract</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="date" 
                            placeholder="Last Day of Contract"
                            required
                            readOnly
                            // onChange={(e) => setEndDate(e.target.value)} 
                            value = { endDate }
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
                                    required 
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
                                    required 
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
                
                {/* Row 5 */}
                <div className="border form-control flex-auto">
                    <label className="label">
                        <span className="label-text">Additional Comments</span>    
                    </label>
                    <textarea className="input input-bordered w-full"
                        type="text" 
                        placeholder="Additional Comments..."
                        value = {comments}
                        onChange={(e) => setComments(e.target.value)} 
                    />
                    <label className="label">
                        <span className="label-text">Upload Handover Doc</span>    
                    </label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="formFile"
                        onChange={(e) => setDoc(e.target.value)}
                        />
                </div>
                
                <div className="form-control mt-2">
                    <button className="btn btn-accent w-full max-w-xs" type='submit'>Save</button>
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
            <p>{endDate}</p>
            <p>{siteA}</p>
            <p>{siteB}</p>
            <p>{comments}</p>
            <p>{doc}</p>
        </div>
     );
}
 
export default AddCircuit;