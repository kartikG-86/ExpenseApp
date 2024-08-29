import React, { useEffect, useState } from "react";
import { sections } from "../SideBarOptions";
import { useLocation, useNavigate } from "react-router-dom";
const BottomNavbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentSection, setCurrentSection] = useState('/home')
    useEffect(() => {
        setCurrentSection(location.pathname)
    })
    const changeSection = (section) => {
        setCurrentSection(section)
        navigate(section)
    }
    return <>
        <div className="bottom-navbar" style={{ backgroundColor: '#ffffff' }}>
            <div className="d-flex flex-row justify-content-around p-1">
                {sections && sections.map((section) => (
                    <div onClick={() => changeSection(section.link)} className={`d-flex flex-column bottom-nav-sections ${currentSection == section.link ? 'sidebar-active' : ''} `}>
                        <div className="text-center">{section.icon}</div>
                        <div>{section.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default BottomNavbar
