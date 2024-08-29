import React, { useEffect, useState } from "react";
import { sections } from "../SideBarOptions";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {

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
        <div className="sidebar d-flex flex-column justify-content-between ">
            <div className="sidebar-sections">
                {sections.map((section) => (
                    <div onClick={() => changeSection(section.link)} className={`my-3 ${currentSection == section.link ? 'sidebar-active' : ''} sidebar-section`}>
                        {section.icon}
                        <span className="ms-3" href={section.link}>{section.title}</span>
                    </div>
                ))}
            </div>

            <div className="logout-btn text-center">
                Logout <RiLogoutCircleRLine />
            </div>
        </div>
    </>
}

export default Sidebar