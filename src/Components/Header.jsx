import React from 'react';

const Header = () => {
    return (
        <>

            <div className='grid grid-cols-3 justify-between items-center'>
                <div className='w-2/3 shadow-md shadow-blue-400'>


                    <h1 className=' font-bold py-3 text-xl text-center bg-[#2D318A] text-slate-200 rounded-md'>Today's Market Highlights</h1>
                </div>
                
                <div className=' m-auto w-40 h-full '>
                    <h1 className='border-b border-blue-950 shadow-sm shadow-blue-400 font-bold p-2 text-center   rounded-b-lg'>05/10/2024</h1>
                    <h1 className='border-b border-blue-950 w-32 pb-1 m-auto shadow-sm shadow-blue-800 font-bold text-center  rounded-b-lg'>Saturday</h1>

                    {/* <h1 className='shadow-sm shadow-blue-400 font-bold p-2 text-center bg-[#2D318A] text-slate-200 rounded-b-lg'>05/10/2024</h1>
                    <h1 className='w-32 pb-1 m-auto shadow-sm shadow-blue-800 font-bold text-center bg-[#4E51A1] text-slate-200 rounded-b-lg'>Saturday</h1> */}
                </div>


                <div className='flex justify-end '>
                    <img className='w-3/4' src="https://i.ibb.co.com/KL5dYhT/CBC-LOGO-Full-removebg-preview.png" alt="" />
                </div>
            </div>



        </>
    );
};

export default Header;