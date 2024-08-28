import React from "react";

const TotalBalanceCard = () => {
    function formatToIndianCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,  // No fraction digits
            minimumFractionDigits: 0,
        }).format(amount);
    }
    return <>
        <div class="col-md-4 col-sm-12 mb-4">
            <div class="card">
                <div className="card-body ">
                    <div className="d-flex flex-row justify-content-between">
                        <h6 class="card-title" style={{fontSize:'1rem',color:'grey'}}>Total Balance</h6>
                        <a href='/total-balance'>View all</a>
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