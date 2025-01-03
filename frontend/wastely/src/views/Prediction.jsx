import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router";
import "./styles/Prediction.css";

const Prediction = () => {
    const location = useLocation();
    
    const [prediction, setPrediction] = useState(location.state?.prediction || null)
    const [isLoading, setIsLoading ] = useState(!prediction) 
    const [file, setFile] = useState(location.state?.file || null)
    const [fileUrl, setFileUrl] = useState()

    useEffect(() => {
        if (!prediction) setIsLoading(true);
    }, [prediction]);

    useEffect(() => {
        if (file) setFileUrl(URL.createObjectURL(file));
    }, [file])

    if (isLoading) {
        return (
            <div className="prediction-container">
                <p>Oops! It doesn't seem like you submitted an image. </p>
                <NavLink to="/" className="button">Return to home</NavLink>
            </div>
        )
    }

    return (
        <div className="prediction-container">
            Your waste is categorized as:
            <p>
                {prediction}
            </p>
            <img src={fileUrl}></img>
            <div>
                <NavLink to="/map" className="button">Find Trashcans</NavLink>
                <NavLink to="/wastely" className="button">Upload Image</NavLink>
            </div>
            
        </div>
    )
}

export default Prediction;