import { useState } from "react"

const Prediction = () => {
    const [isLoading, setIsLoading ] = useState() 
    const [prediction, setPrediction] = useState()
    const [file, setFile] = useState()

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            The prediction for your image was: {prediction}
            <img src=""></img>
        </div>
    )
}

export default Prediction;