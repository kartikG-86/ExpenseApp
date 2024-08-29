import React, { useState } from "react";

const Dropdown = ({data}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [newOption, setNewOption] = useState(data[0])

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const changeOption = (option) => {
        setNewOption(option)
    }

    return (
        <div className="custom-dropdown" onClick={toggleDropdown}>
            <div className="mx-2 dropdown-btn">
                {newOption} <i className="bi bi-chevron-compact-down ms-3"></i>
            </div>
            {showDropdown && (
                <div className="custom-dropdown-options">
                    {data.map((option) => (
                        <div onClick={() => changeOption(option)}>{option}</div>
                    ))}
                    
                </div>
            )}
        </div>
    );
};

export default Dropdown;
