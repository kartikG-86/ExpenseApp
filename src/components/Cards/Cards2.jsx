import React, { useEffect } from "react";
import formatToIndianCurrency from "../../currencyConverter";
import CardProgressBar from "./CardProgressBar";
import CardDescription from "./CardDescription";
import CardStatus from "./CardStatus";

const Cards2 = ({ data, type }) => {

    const calculatePercentage = (currentAmount, totalAmount) => {
        console.log(currentAmount, totalAmount)
        const percentage = ((currentAmount / totalAmount) * 100).toFixed(2)
        console.log(`${percentage}`)
        return `${percentage}%`
    }

    return <>

        <div className="card all-cards my-3" style={{ border: 'none', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', minHeight: '6.8rem' }}>
            <div className="card-body d-flex flex-row" >
                {data.icon}
                <div style={{ width: `${type == "Budgets" ? '81%' : '100%'}` }} >
                    <div className="d-flex flex-row justify-content-between" style={{ color: 'black' }}>
                        <div className="card-title" style={{ fontWeight: '600' }}>
                            {data.title}
                        </div>
                        {type == 'Transaction' &&
                            <CardStatus status={` ${data.title == "Income" ? '+' : "-"} ${formatToIndianCurrency(data.amount)}`} class_name={data.title == "Income" ? 'income-title amount' : 'expense-title amount'} />
                        }
                    </div>
                    {type == "Budgets" &&
                        <CardDescription description={`Last Transaction: ${data.date}`} />
                    }
                    {
                        type == 'Transaction' &&
                        <div className="d-flex flex-row justify-content-between">
                            <CardDescription description={data.description} />
                            <CardDescription description={data.time} />
                        </div>
                    }
                    {type != 'Transaction' && <CardProgressBar width={calculatePercentage(data.currentAmount, data.totalAmount)} />}

                    {type == "Goals" && <div className="d-flex flex-row justify-content-between mt-2">
                        <span className="saved_amount">Saved {formatToIndianCurrency(data.currentAmount)}</span>
                        <span className="left_amount">Left {formatToIndianCurrency(data.totalAmount - data.currentAmount)}</span>
                    </div>
                    }
                </div>
                {type == "Budgets" &&
                    <div className="d-flex flex-column ms-2">
                        <CardStatus status={formatToIndianCurrency(data.currentAmount)} class_name='current_amount' />
                        <CardStatus status={`${formatToIndianCurrency(data.totalAmount)} limit`} class_name='budget_amount' />
                    </div>
                }

            </div>
        </div>

    </>
}

export default Cards2;