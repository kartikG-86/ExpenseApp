import React from "react";

const Card = ({ title, money, icon }) => {

    function formatToIndianCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,  // No fraction digits
            minimumFractionDigits: 0,
        }).format(amount);
    }
    
    return <>
        <div class="col-6">
            <div class="card">
                <div className="card-body d-flex flex-row">
                    <div className={`card-icon p-1 me-4 ${title == 'Income' ? 'income-icon' : 'expense-icon'} `}>{icon}</div>
                    <div className="d-flex flex-column mt-1">
                        <h6 className={`${title == "Income" ? 'income-title' : 'expense-title'}`}>{title}</h6>
                        <h3>{formatToIndianCurrency(money)}</h3>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Card;