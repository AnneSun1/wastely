import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '@lottiefiles/lottie-player';
import { NavLink } from "react-router";
import Wastely from "./Wastely";
import TrashcanAni from "../components/TrashcanAni";
import "./styles/Welcome.css"

const Welcome = () => {
    const playAnimation = () => {

    }


    return (
        <div className="welcome-container">
            <div className="welcome-title">
               Welcome to Wastely!
            </div>
            <div>
                Click on the trashcan to continue
            </div>
            <div className="animation-container">
                <TrashcanAni/>
            </div>
        
        </div>
    )
}

export default Welcome;