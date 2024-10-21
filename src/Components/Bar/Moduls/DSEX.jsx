import React from 'react';

const DSEX = () => {
    return (
        <>
            <div className='shadow-md border border-[#3B4094] rounded-lg col-span-3 pb-2'>
                <h1 className='text-xl text-center font-extrabold text-white mb-2 bg-[#3B4094] rounded-t-lg py-2'>MARKET AT A GLANCE</h1>
                <div className='grid grid-cols-9 text-center gap-2 px-2 py-3'>
                    <h1 className=' rounded-sm font-bold'></h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-bold shadow-inner py-1 col-span-2'>DSEX</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-bold shadow-inner py-1 col-span-3'>Turnover <br /> (BDT mn)</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-bold shadow-inner py-1 col-span-3'>Market Cap. <br /> (BDT bn)</h1>

                    <h1 className=' text-right rounded-sm font-thin text-[12px] '>Today</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-2'>5485</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-3'>6622</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-3'>3670</h1>

                    <h1 className=' text-right rounded-sm font-thin text-[12px] '>Yesterday</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-2'>5483</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-3'>6223</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-3'>3658</h1>

                    <h1 className=' text-right rounded-sm font-thin text-[12px] '>Change</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-2'>2</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-3'>400</h1>
                    <h1 className='bg-blue-200 rounded-sm border border-black/30 font-medium shadow-inner col-span-3'>13</h1>
                </div>
            </div>



        </>
    );
};

export default DSEX;