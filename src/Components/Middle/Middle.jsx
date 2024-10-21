import React from 'react';
import TopTurnOver from './TopTurnOver/TopTurnOver';
import TopGLsector from './TopGLsector/TopGLsector';
import TopTurnoverContribution from './TopTurnoverContribution/TopTurnoverContribution';

const Middle = () => {
    return (
        <>
            <div className=' grid grid-cols-7 gap-4 py-4 px-2'>
                <TopTurnOver></TopTurnOver>
                <TopTurnoverContribution></TopTurnoverContribution>


            </div>


        </>
    );
};

export default Middle;