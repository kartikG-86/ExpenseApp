import React from "react";
import formatToIndianCurrency from "../../currencyConverter";

const TotalBalanceCard = () => {

    return <>
        <div className="col-md-4 col-sm-12 mb-4">
            <div className="card" style={{border:'none',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <div className="card-body" >
                    <div className="d-flex flex-row justify-content-between">
                        <h6 className="card-title" style={{fontSize:'1rem',color:'grey'}}>Total Balance</h6>
                        <a href='/total-balance' className="link">View all</a>
                    </div>

                    <div className="balance mt-2">
                        <h2>{formatToIndianCurrency(223876)}</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TotalBalanceCard;