import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import lottie from 'lottie-web';
import LottieInteractivity from '@lottiefiles/lottie-interactivity';


const TrashcanAni = () => {
    const lottieRef = useRef(null);
    const animationInstance = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {    
        animationInstance.current = lottie.loadAnimation({
            container: lottieRef.current, // The container element
            renderer: 'svg',
            loop: false,
            autoplay: false, // Autoplay is handled by interactivity
            path: '../../public/lottie/trashcan-animation.json', // Path to your Lottie JSON file
        });

        return () => {
            if (animationInstance.current) {
                animationInstance.current.destroy();
            }
        };
    }, [])

    const handleClick = () => {
        if (animationInstance.current) {
            animationInstance.current.play();
        }

        setTimeout(() => {
            navigate("/Wastely")
        }, 2400);
    }

    return (
        <div
            ref={lottieRef}
            onClick={handleClick}
            className="trashcan-ani"
        ></div>
    )
}

export default TrashcanAni;