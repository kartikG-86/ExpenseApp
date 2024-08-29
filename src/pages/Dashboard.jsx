import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import HomeSection from "../components/HomeSection";
import BottomNavbar from "../components/BottomNavbar";
import { useLocation } from "react-router-dom";
import Statistics from "../components/Statistics";
import Wallet from "../components/Wallet";
import Profile from "../components/Profile";

const Dashboard = () => {
    const location = useLocation()
    const [currentRoute, setCurrentRoute] = useState('/home')

    useEffect(() => {
        setCurrentRoute(location.pathname)
    })
    return (
        <div className="dashboard p-md-3 p-0">
            <div className="row" style={{ height: '100%' }}>
                <div className="col-2 d-none d-sm-block">
                    <Sidebar />
                </div>

                <div className="col-12 col-sm-10 " style={{ height: '100%' }}>
                    <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                        {currentRoute.includes('home') && <HomeSection />}
                        {currentRoute.includes('statistics') && <Statistics />}
                        {currentRoute.includes('wallet') && <Wallet />}
                        {currentRoute.includes('profile') && <Profile />}
                        <BottomNavbar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
