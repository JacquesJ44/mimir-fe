import { useEffect, useState } from "react";

const SiteDropdown = (props) => {

    // const [options, setOptions] = useState([])
    const [options, setOptions] = useState([]);
    // const [selectedOption, setSelectedOption] = useState('');

    useEffect = () => {
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

    // const handleChange = (value) => {
    //     fetchData(value);
    //     // setSiteA(value);
    // }

    return (
    <>  
        <datalist>
            {Array.isArray(options) ? options.map((option, index) => {
            return <option key={index} value={option.site}>
                {option.site}
            </option>})
            : []} 
        </datalist>
    </>
    );
}

 
export default SiteDropdown;