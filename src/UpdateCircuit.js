import { useState, useEffect } from "react";
import { IP } from './config.js';
import { useNavigate, useParams } from "react-router-dom";
import moments from "moment";

const UpdateCircuit = () => {
    
    const {id}  = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        
        fetch(IP + "/updatecircuit/" + id, {
            method: 'GET',
            headers: { "Authorization": 'Basic',
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": 'true'},
            mode: "cors",
            credentials: "include",
        }).then(res => {
            return res.json();
        }).then((data__) => {
            // console.log(data__);
            setData(data__);
        });
    }, [id])
    
    // Main form data variables
    const [speed, setSpeed] = useState(data.speed);
    const [enni, setEnni] = useState(data.enni);
    const [vlan, setVlan] = useState(data.vlan);
    const [startDate, setStartDate] = useState(data.startDate);
    const [contractTerm, setContractTerm] = useState(data.contractTerm);
    const [endDate, setEndDate] = useState(data.endDate);
    const [comments, setComments] = useState(data.comments);
    const [status, setStatus] = useState(data.status);
    const [doc, setDoc] = useState(data.doc);

    const contract_status = ['Active', 'Cancelled'];
    
    let navigate = useNavigate();

    // Upon submitting the form we'll: 
    // 1. add all the details as usual and also upload a document
    // 2. upload a document

    // 1. Add all the circuit details
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            id: id,
            speed: speed,
            enni: enni,
            vlan: vlan,
            startDate: startDate,
            contractTerm: contractTerm,
            endDate: endDate,
            comments: comments,
            status: status,
            doc: doc
        };
        fetch(IP + '/updatecircuit/' + id, {
            method: 'POST',
            headers: { "Authorization": 'Basic',
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": 'true'},
            body: JSON.stringify(form),
            mode: "cors",
            credentials: "include"
        })
        .then(res => {
            // console.log(res)
            return res.json()
        }).then(data => {
            // console.log(data)
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
            // console.log(formFile.files)

            if (formFile.files.length > 0 ){
                fetch(IP + '/upload', {
                    method: 'POST',
                    // headers: { "Authorization": 'Basic',
                    //     "Content-Type": 'application/pdf',
                    //     "Access-Control-Allow-Origin": 'true'},
                    body: formData,
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
                        handleSubmit(e)
                    }
                })
            } else {
                handleSubmit(e)
            }
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
        {label: "ENI11-0001107", value: "ENI11-0001107"},
        {label: "GNI21-0000071", value: "GNI21-0000071"},
    ]

    return ( 
        <>
        <div className="card-body">
            <form onSubmit={(e) => {handleUpload(e)}}>
                <h1><strong>{data.vendor} | {data.circuitType} | {data.circuitNumber}</strong></h1>
                {/* Row 1 */}
                <div className="flex">
                    <div className="form-control flex-auto">
                        <label htmlFor="speed" className="label">
                            <span className="label-text">Speed</span>
                        </label>
                        <select onChange={(e) => setSpeed(e.target.value)} id="speed" className="input input-bordered w-full max-w-xs" defaultValue={speed ? speed : data.speed}>
                        <option value={speed ? speed : data.speed}>{data.speed}</option>
                                {speeds.map((s, index) => {
                                    return (
                                        <option key={index} value={s.value}>{s.label}</option>
                                    )
                                })}
                        </select>
                    </div>
                    
                    <div className="form-control flex-auto">
                        <label htmlFor="enni" className="label">
                            <span className="label-text">ENNI</span>
                        </label>
                        <select onChange={(e) => setEnni(e.target.value)} id="enni" className="input input-bordered w-full max-w-xs" defaultValue={enni ? enni : data.enni}>
                        <option value={enni ? enni : data.enni}>{ data.enni }</option>
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
                            placeholder={ data.vlan }
                            value = { vlan }
                            onChange={(e) => setVlan(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="status" className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <select onChange={(e) => {setStatus(e.target.value)}} id="status" className="input input-bordered w-full max-w-xs" defaultValue={status ? status : data.status}>
                            <option value={status ? status : data.status}>{data.status}</option>
                                {contract_status.map((c, index) => {
                                    return (
                                        <option key={index} value={c}>{c}</option>
                                    )
                                })}
                        </select>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex">
                    <div className="form-control flex-auto">
                        <label className="label">
                            <span className="label-text">Start Date</span>    
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="date" 
                            placeholder="Start Date"
                            required
                            defaultValue = { startDate ? startDate : data.startDate }
                            onChange={(e) => setStartDate(e.target.value)} 
                        />
                    </div>

                    <div className="form-control flex-auto">
                        <label htmlFor="contractterm" className="label">
                            <span className="label-text">Contract Term</span>
                        </label>
                        <select onChange={(e) => {lastDay(e.target.value)}} id="contractterm" className="input input-bordered w-full max-w-xs" defaultValue={contractTerm ? contractTerm : data.contractTerm}>
                        <option value={contractTerm ? contractTerm : data.contractTerm}>{data.contractTerm}</option>
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
                            readOnly
                            defaultValue={endDate ? endDate : data.endDate}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="form-control flex-auto">
                    <label className="label">
                        <span className="label-text">Additional Comments</span>    
                    </label>
                    <textarea className="input input-bordered w-full"
                        type="text" 
                        placeholder="Additional Comments..."
                        defaultValue = {comments ? comments : data.comments}
                        onChange={(e) => setComments(e.target.value)} 
                    />
                    <label className="label">
                        <span className="label-text">Upload Handover Doc</span>    
                    </label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="formFile"
                        defaultValue = {doc ? doc : data.doc} 
                        onChange={(e) => setDoc(e.target.value)}/>
                        <p> 
                         <span className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Current doc: { data.doc }</span>
                        </p>
                </div>
                
                <div className="form-control mt-2">
                    <button className="btn btn-accent w-full max-w-xs">Update</button>
                </div>
            </form>
            {/* <p>{speed ? speed + 'new': data.speed + 'old'}</p>
            <p>{startDate ? startDate : data.startDate + 'old'}</p>
            <p>{contractTerm ? contractTerm : data.contractTerm + 'old'}</p>
            <p>{endDate ? endDate : data.endDate + 'old'}</p>
            <p>{comments ? comments : data.comments + 'old'}</p>
            <p>{status ? status : data.status + 'old'}</p> */}
        </div>
    </>
     );
}
 
export default UpdateCircuit;