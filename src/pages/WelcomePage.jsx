import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        },2000)
    })
    return <>
        <Welcome />
    </>
}

export default WelcomePage