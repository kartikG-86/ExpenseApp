import React, { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = () => {
    const sections = [{
        title: 'Home',
        link: '/home',
        icon: <GoHome style={{ fontSize: '1.6rem' }} />
    }, {
        title: 'Statistics',
        link: '/statistics',
        icon: <BsGraphUpArrow style={{ fontSize: '1.6rem' }} />

    }, {
        title: 'Wallet',
        link: '/wallet',
        icon: <CiWallet style={{ fontSize: '1.6rem' }} />
    }, {
        title: 'Profile',
        link: '/profile',
        icon: <FaRegUserCircle style={{ fontSize: '1.6rem' }} />

    },]

    const [currentSection, setCurrentSection] = useState('/home')
    const changeSection = (section) => {
        setCurrentSection(section)
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