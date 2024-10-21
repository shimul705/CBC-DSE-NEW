import React from 'react';
import DSEX from './Moduls/DSEX';
import TopGainer from './Moduls/TopGainer';
import TopLosers from './Moduls/TopLosers';

const Bar = () => {
    return (
        <>
            <div className='flex justify-center mt-4'>
                <h1 className='text-4xl font-extrabold text-blue-900'>MARKET AT A GLANCE</h1>
            </div>

            <div className=' grid grid-cols-7 gap-4 py-4 px-2'>
                <DSEX></DSEX>
                <TopGainer></TopGainer>
                <TopLosers></TopLosers>
                
                
            </div>
            
        </>
    );
};

export default Bar;