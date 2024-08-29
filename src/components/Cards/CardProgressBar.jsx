import React from "react";

const CardProgressBar = ({width}) => {
    return <>
        <div class="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '98%', height: '0.4rem' }} >
            <div class="progress-bar" style={{ width: width, backgroundColor: '#0766eb' }}></div>
        </div>
    </>
}

export default CardProgressBar