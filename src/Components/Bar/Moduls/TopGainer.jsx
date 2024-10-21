import React from 'react';
import { GiChargingBull } from "react-icons/gi";
import { GoTriangleUp } from 'react-icons/go';

const TopGainer = () => {
    return (
        <>
            <div className='shadow-md border border-[#3B4094] rounded-lg col-span-2 pb-2'>
                <h1 className='grid grid-cols-5 text-xl text-center font-extrabold text-white mb-2 bg-[#3B4094] rounded-t-lg py-2 items-center'>
                    <span className='flex justify-end text-2xl text-green-400 bg-[#4E51A1] rounded-r-md'><GiChargingBull /></span>
                    <span className='col-span-3'>TOP GAINERS</span>
                    <span className='bflex justify-start text-2xl text-green-400 bg-[#4E51A1] rounded-l-md'><GoTriangleUp /></span>
                </h1>

                <div className='flex flex-col text-center gap-1 px-2 py-3'>

                    {/* Top 1 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>ISNLTD</h1>
                            <h1>9.9%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-green-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '99%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 2 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>ZEALBANGLA</h1>
                            <h1>9.9%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-green-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '99%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 3 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>TECHNODRUG</h1>
                            <h1>9.8%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-green-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '98%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 4 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>FEKDIL</h1>
                            <h1>7.8%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-green-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '78%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 5 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>WALTONHIL</h1>
                            <h1>7.5%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-green-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '75%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default TopGainer;