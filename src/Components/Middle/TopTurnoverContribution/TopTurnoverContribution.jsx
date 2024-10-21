import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    LabelList,
} from 'recharts';

const TopTurnoverContribution = () => {
    const dataset = [
        { sector: 'Pharma', value: 24.1 },
        { sector: 'Food & Allied', value: 10.1 },
        { sector: 'Textile', value: 8.6 },
        { sector: 'Engineering', value: 8.4 },
        { sector: 'Bank', value: 6.4 },
    ];

    // Dynamically set height based on dataset size
    const calculatedHeight = dataset.length * 50; // 50px per bar, extra 50px for padding

    return (
        <>
            <div className='shadow-md border border-[#3B4094] col-span-4 rounded-lg pb-2'>
                <h1 className='text-xl text-center font-extrabold text-white mb-2 bg-[#3B4094] rounded-t-lg py-2'>TOP TURNOVER CONTRIBUTION</h1>

                {/* Chart Container */}
                <div style={{ height: `${calculatedHeight}px` }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={dataset}
                            layout="vertical"
                            margin={{ top: 20, right: 20, left: 30, bottom: 0 }}
                            
                        >
                            <XAxis
                                type="number"
                                domain={[0, 25]}
                                axisLine={false}
                                tickLine={false}
                                tick={false}
                            />
                            <YAxis
                                dataKey="sector"
                                type="category"
                                width={100} // ensure space for labels
                                tick={{ width: 100 }}
                                tickFormatter={(value) => value}
                                
                            />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Bar dataKey="value" fill="#4C51A0">
                                <LabelList
                                    dataKey="value"
                                    position="insideRight"
                                    formatter={(value) => `${value}%`}
                                    fill="#ffffff"
                                    
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default TopTurnoverContribution;
