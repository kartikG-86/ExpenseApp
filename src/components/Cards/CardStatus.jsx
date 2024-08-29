import React from "react";

const CardStatus = ({status , class_name}) => {
    return <>
        <div className={` ${class_name} `}>
            {status}
        </div>
    </>
}

export default CardStatus