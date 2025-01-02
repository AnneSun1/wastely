import { useState } from "react";
import axios from 'axios';
import DropFileInput from "../components/DropFileInput";
import { NavLink } from "react-router";
import Navbar from "../components/Navbar";
import "./styles/Wastely.css";
const URL = "http://localhost:8080/predict"

function Wastely() {

    async function predict(){
        const formData = new FormData()
        formData.append('image', file)
            const response = await axios.post(URL, formData, { headers: 
                {
                'Content-Type': 'multipart/form-data',
                }});
            console.log(response.data)
            setPrediction(response.data)
            
        }

    const [file, setFile] = useState();
    const [prediction, setPrediction] = useState();
    
    function handleChange(e) {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    function predictImage() {
        predict(file);
    }
    return (
        <div style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: "100vh",
            width: "100vw",
            top: "0",
        }}>
            
            <div className="file-upload-container">
                Insert a picture below to see if it's a recycable or organic:
                <DropFileInput onChange={handleChange}/>
                <button onClick={predictImage}>Upload</button>
            </div>
            OR
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "2rem"
            }}>
                <NavLink to="/map" className="map-button">
                    Find the Nearest Trashcan
                </NavLink>
            </div>
        </div>
    )
}

export default Wastely;