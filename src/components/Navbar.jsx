import React from "react";
import Avatar from 'react-avatar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Navbar = () => {
    return <>
        <div className=" navbar d-flex flex-row justify-content-between p-3">
            <div className="d-flex flex-row">
                <Avatar className="avatar" size="3rem" name="Foo Bar" />
                <div className="mx-3 d-flex flex-column">
                    <span className="title">Hello</span>
                    <span className="sub-title">Kartik Goyal</span>
                </div>
            </div>
            <div className="d-flex flex-row">
                <MdOutlineAddCircleOutline className="icon mx-3 add-btn" />

                <div>
                    <IoMdNotificationsOutline className="icon mx-3" />
                    <div className="notification"></div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;