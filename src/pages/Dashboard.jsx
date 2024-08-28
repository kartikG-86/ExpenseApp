import React from "react";
import Sidebar from "../components/Sidebar";
import HomeSection from "../components/HomeSection";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="row" style={{ height: '100%' }}>
                <div className="col-2 d-none d-sm-block">
                    <Sidebar />
                </div>
                <div className="col-12 col-sm-10">
                    <HomeSection />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
