import React from "react";
import formatToIndianCurrency from "../../currencyConverter";

const Card = ({ title, money, icon }) => {

    return <>
        <div className="col-6">
            <div className="card" style={{ border: 'none', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
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