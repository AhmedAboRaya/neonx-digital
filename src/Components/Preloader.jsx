import React, { useState, useEffect } from "react";
import Intro from "../assets/Intro/NeonX.mp4";
import IntroMobile from "../assets/Intro/NeonXMobile.mp4";

function Preloader({ className }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Update state on resize
        };

        window.addEventListener("resize", handleResize); // Add event listener
        return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#060A11] to-[#010202] z-50">
            <video
                key={isMobile ? "mobile" : "desktop"} // Force re-render
                autoPlay
                muted
                className="w-full h-full object-contain"
            >
                <source src={isMobile ? IntroMobile : Intro} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Preloader;