import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DataBarChart from "./Charts/BarChart";
import DataPieChart from "./Charts/PieChart";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import Cards2 from "./Cards/Cards2";

const Statistics = () => {
    const sections = [{
        title: 'All'
    }, {
        title: 'Income'
    }, {
        title: 'Expense'
    }]

    const transactionData = [{
        title: "Income",
        description: 'Salary main income',
        amount: 9020,
        time: '10:00 AM',
        icon: <FaArrowUpLong className="icon special-icons me-3" style={{ backgroundColor: '#b3e5d3', color: '#11884c' }} />
    }, {
        title: "Expense",
        description: "Food dinner at kenneyd's",
        amount: 120,
        time: '12:00 PM',
        icon: <FaLongArrowAltDown className="icon special-icons me-3" style={{ backgroundColor: '#ffc5c9', color: '#d91827' }} />
    }, {
        title: "Income",
        description: 'Side part time job',
        amount: 2220,
        time: '05:00 PM',
        icon: <FaArrowUpLong className="icon special-icons me-3" style={{ backgroundColor: '#b3e5d3', color: '#11884c' }} />

    }, {
        title: "Expense",
        description: 'Shaving Blade',
        amount: 1129,
        time: '10:34 PM',
        icon: <FaLongArrowAltDown className="icon special-icons me-3" style={{ backgroundColor: '#ffc5c9', color: '#d91827' }} />

    },]

    const dropdownData = ["Monthly", "Yearly"]
    const yearData = ["2020", "2021", "2022", "2023", "2024"]
    const [currentSection, setCurrentSection] = useState("All")

    const changeSection = (section) => {
        setCurrentSection(section)
    }
    return <>
        <div className="main-section">
            <div className="my-3">
                <h5 className="text-center">Statistics</h5>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="row row-cols-3 stats-sections">
                    {sections && sections.map((section) => (
                        <div className={`text-center ${currentSection == section.title ? 'stats-active' : ''}`} onClick={() => changeSection(section.title)} >{section.title}</div>
                    ))}
                </div>
            </div>
            <div className="px-xs-1 px-sm-2 px-3">

                <div className="chart">
                    <div className="d-flex flex-row justify-content-end my-3" >
                        <Dropdown data={yearData} />
                        <Dropdown data={dropdownData} />
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        {currentSection == "All" ? <DataBarChart /> : <DataPieChart />}
                    </div>
                </div>
                <div className="transactions px-3 my-4">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="title" >Recent Transactions</div>
                        <div>
                            <a href="/all-transactions" className="link" >View all</a>
                        </div>

                    </div>
                    <div className="row row-cols-xxl-2 row-cols-1">
                        {transactionData && transactionData.map((data) => (
                            <div className="col">
                                <Cards2 type="Transaction" data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Statistics