import React, { useState, useEffect } from "react";
import { LineChart } from '@mui/x-charts/LineChart';

const Chart = () => {
    const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.8); // Start with 90% of the window width

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth * 0.8); // Adjust width to 90% of the current window width
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 14, 15, 18, 20, 22, 25, 28, 30] }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5, 7, 3, 6, 9, 4.5, 6.5, 7.5, 2.5, 8],
                },
            ]}
            width={chartWidth}
            height={300}
        />

    );
}

export default Chart;
