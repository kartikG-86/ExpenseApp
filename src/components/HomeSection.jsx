import React from "react";
import Navbar from "./Navbar";
import Card from "./Cards/Card";
import TotalBalanceCard from "./Cards/TotalBalanceCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import Chart from "./Charts/Chart";
import Dropdown from "./Dropdown";
import Cards2 from "./Cards/Cards2";
import { FaPlaystation } from "react-icons/fa";
import { FcIphone } from "react-icons/fc";
import { FaCar } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

const HomeSection = () => {

    const goalData = [{
        title: 'Play Station',
        currentAmount: 2200,
        totalAmount: 3200,
        icon: <FaPlaystation className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />
    }, {
        title: 'Iphone',
        currentAmount: 1200,
        totalAmount: 2200,
        icon: <FcIphone className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />
    }, {
        title: 'Black Fortuner',
        currentAmount: 2200,
        totalAmount: 5200,
        icon: <FaCar className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />

    }, {
        title: 'Black Fortuner',
        currentAmount: 2200,
        totalAmount: 5200,
        icon: <FaCar className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />

    },]

    const budgetData = [{
        title: 'Entertainment',
        currentAmount: 120,
        totalAmount: 300,
        icon: <GiMicrophone className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />,
        date: 'Sat, June 5'
    }, {
        title: 'Food',
        currentAmount: 220,
        totalAmount: 200,
        icon: <IoFastFoodOutline className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />,
        date: 'Mon, July 8'
    }, {
        title: 'Pets',
        currentAmount: 120,
        totalAmount: 200,
        icon: <MdOutlinePets className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />,
        date: 'Sat, June 5'
    }, {
        title: 'Shopping',
        currentAmount: 420,
        totalAmount: 600,
        icon: <GiShoppingCart className="icon special-icons me-3" style={{ backgroundColor: '#e7f0fd' }} />,
        date: 'Sat, June 5'
    },]

    const dropdownData = ["Weekly", "Monthly", "Yearly"]
    return <>
        <div className="main-section">
            <Navbar />
            <div className="row px-3 mt-4">
                <TotalBalanceCard />
                <div className="col-md-8 col-12 row row-col-2 gx-3" >
                    <Card title="Income" icon={<FaArrowTrendUp />} money="273876" />
                    <Card title="Expense" icon={<FaArrowTrendDown />} money="50000" />
                </div>
            </div>

            <div className="my-4 px-3" >
                <h5>Expense Chart</h5>
                <div className="chart">
                    <div className="d-flex flex-row justify-content-end mt-3" >
                        <Dropdown data={dropdownData} />
                    </div>
                    <Chart />
                </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-2 row-cols-sm-1 my-5 mx-1">
                <div className="col-12" >

                    <div className="d-flex flex-row justify-content-between">
                        <div className="title" >Goals</div>
                        <div>
                            <a href="/goals" className="link" >View all</a>
                        </div>
                    </div>

                    {goalData && goalData.map((data) => (
                        <Cards2 type="Goals" data={data} />
                    ))}
                </div>
                <div className="col-12" >

                    <div className="d-flex flex-row justify-content-between">
                        <div className="title" >Budgets</div>
                        <div>
                            <a href="/budgets" className="link" >View all</a>
                        </div>
                    </div>

                    {budgetData && budgetData.map((data) => (
                        <Cards2 type="Budgets" data={data} />
                    ))}
                </div>
            </div>

        </div>
    </>
}

export default HomeSection