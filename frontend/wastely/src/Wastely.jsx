import { useState } from "react";
import axios from 'axios';

const URL = "http://localhost:8080"

function Wastely() {

    async function predict(){
            const response = await axios.post(URL, {
                file
            })
            setPrediction(response.data)
        }

    const [file, setFile] = useState();
    const [prediction, setPrediction] = useState();
    
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            Wastely: Insert a picture below
            <div>
                <input type="file" onChange={handleChange} />
                <img src={file} />

            </div>
        </div>
    )
}

export default Wastely;