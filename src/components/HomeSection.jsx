import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import TotalBalanceCard from "./TotalBalanceCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import Chart from "./Chart";

const HomeSection = () => {
    return <>
        <div className="main-section ">
            <Navbar />
            <div class="row px-3 mt-4">
                <TotalBalanceCard />
                <div className="col-md-8 col-12 row row-col-2 gx-3" >
                    <Card title="Income" icon={<FaArrowTrendUp />} money="273876" />
                    <Card title="Expense" icon={<FaArrowTrendDown />} money="50000" />
                </div>
            </div>

            <div className="my-4 px-3" >
                <h5>Expense Chart</h5>

                <Chart />
            </div>

        </div>
    </>
}

export default HomeSection