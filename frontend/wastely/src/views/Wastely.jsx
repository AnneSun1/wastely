import { useState } from "react";
import axios from 'axios';
import DropFileInput from "../components/DropFileInput";
import { NavLink, useNavigate } from "react-router";
import "./styles/Wastely.css";
const URL = "http://localhost:8080/predict"

function Wastely() {
    const [fileList, setFileList] = useState([]);
    const [file, setFile] = useState();
    const navigate = useNavigate();

    const onFileChange = (files) => {
        setFileList(files);
    }


    const uploadImage = async (file) => {
        setFile(file)
        const formData = new FormData()
        formData.append('image', file)
            const response = await axios.post(URL, formData, { 
                headers: { 'Content-Type': 'multipart/form-data', }
            });

            console.log(response.data)

            let prediction = null;

            if (typeof response.data.predicted_class !== 'undefined') {
                prediction = response.data.predicted_class
            }
            navigate('/prediction', { state: { prediction: prediction, file: file }})
    }

    
    
    return (
        <div className="wastely-container">
            <div className="file-upload-container">
                Insert a picture below to see if it's a recycable or organic:
                <DropFileInput onFileChange={(files) => onFileChange(files)} uploadImage={(file) => uploadImage(file)}/>
            </div>
            OR
            <div className="map-button-container">
                Search for the Nearest Trashcan
                <NavLink to="/map" className="map-button">
                    Go
                </NavLink>
            </div>
        </div>
    )
}

export default Wastely;