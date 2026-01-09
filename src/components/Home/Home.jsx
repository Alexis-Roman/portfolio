import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="w-full h-screen bg-sky-200 flex flex-col">
      
      <div className="h-14 bg-blue-300 flex items-center px-4 text-white font-semibold">
        Portfolio
      </div>

      <div className="flex-1 flex items-center justify-center">

        <div className="h-130 w-2/3 bg-white w-[600px] rounded-sm shadow-lg">
          <h1 className="text-2xl font-bold text-center"></h1>
        </div>
      </div>

    </div>
  )
}


export default Home;