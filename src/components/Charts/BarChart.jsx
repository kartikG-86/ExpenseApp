import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390,];
const pData = [2400, 1398, 9800, 3908, 4800, 3800,];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',

];

const DataBarChart = () => {
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
        <BarChart
            width={chartWidth}
            height={300}
            series={[
                { data: pData, label: 'Income', id: 'pvId', stack: 'total', color: '#9bdec5' }, // Green for Income
                { data: uData, label: 'Expense', id: 'uvId', stack: 'total', color: '#fdb2b7' }, // Red for Expense
            ]}
            xAxis={[{
                data: xLabels, scaleType: 'band', 
                
            }]}
        />
    );
}

export default DataBarChart;