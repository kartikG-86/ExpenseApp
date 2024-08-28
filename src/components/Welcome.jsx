import React from "react";


const Welcome = () => {
    return <>
    <div className="welcome d-flex flex-row justify-content-center align-items-center">
        <div className="text-center">
            <img src="/logo.jpg" alt="logo" />
            <h4 className="text-center my-3">Expendi</h4>
            <p className="text-center">Manage your expenses</p>
        </div>
    </div>
    </>
}

export default Welcome