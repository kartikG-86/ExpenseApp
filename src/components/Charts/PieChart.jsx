import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
];

export default function DataPieChart() {
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        const handleResize = () => {
            console.log(window.innerHeight, window.innerWidth)
            setInnerWidth(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    return (

        <PieChart
            series={[
                {
                    paddingAngle: 5,
                    innerRadius: 60,
                    outerRadius: 80,
                    data,
                },
            ]}
            margin={{ top: -100, left: 100, right: 100 }}
            width={innerWidth > 800 ? 800 : innerWidth}
            height={280}


            slotProps={{
                legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'bottom' },
                    padding: 2,
                    itemGap: 30
                },
            }}
        />


    );
}
