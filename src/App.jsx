import React from 'react';
import Header from './Components/Header';
import Bar from './Components/Bar/Bar';
import Middle from './Components/Middle/Middle';


function App() {
  return (

    <>

      <div className='w-7/12 m-auto p-4 bg-blue-100 rounded-md mt-4 shadow-slate-400 shadow-md'>

        <div className='border-2 border-blue-800 rounded-md p-2'>
          <Header></Header>

          <div className='w-full'>
            <Bar></Bar>
          </div>


          <div className='w-full'>
            <Middle></Middle>
          </div>










        </div>



      </div>




    </>
  );
}

export default App;
