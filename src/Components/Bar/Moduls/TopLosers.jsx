import React from 'react';
import { GiBearHead, GiChargingBull } from 'react-icons/gi';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

const TopLosers = () => {
    return (
        <>
            <div className='shadow-md border border-[#3B4094] rounded-lg col-span-2 pb-2'>
                <h1 className='grid grid-cols-5 text-xl text-center font-extrabold text-white mb-2 bg-[#3B4094] rounded-t-lg py-2 items-center'>
                    <span className='flex justify-end text-2xl text-red-400 bg-[#4E51A1] rounded-r-md'><GiBearHead /></span>
                    <span className='col-span-3'>TOP LOOSERS</span>
                    <span className='flex justify-start text-2xl text-red-400 bg-[#4E51A1] rounded-l-md '><GoTriangleDown /></span>
                </h1>

                <div className='flex flex-col text-center gap-1 px-2 py-3'>

                    {/* Top 1 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>LINDBD</h1>
                            <h1>9.9%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-red-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '99%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 2 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>SALVOCHEm</h1>
                            <h1>9.9%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-red-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '99%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 3 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>BEACHHATCH</h1>
                            <h1>9.9%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-red-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '99%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 4 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>OIMEX</h1>
                            <h1>9.9%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-red-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '99%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                    {/* Top 5 */}
                    <div className="flex flex-col justify-between px-2 rounded-sm text-sm border shadow-black/10 shadow-inner my-[.4px]">
                        <div className="flex justify-between font-medium">
                            <h1>KBPPWBIL</h1>
                            <h1>9.6%</h1>
                        </div>
                        <div className="relative h-[6px] bg-white w-full border border-black/30 rounded-sm">
                            <div
                                className="h-full bg-red-400 rounded-md border-r-2 border-green-800"
                                style={{ width: '96%' }} // 9.9% of 10 represents 99%
                            ></div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default TopLosers;