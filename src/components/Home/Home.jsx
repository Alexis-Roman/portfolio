import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="w-full h-screen bg-sky-200 flex flex-col">
      
      <div className="h-14 bg-blue-300 flex items-center px-4 text-white font-semibold">
        Portfolio
      </div>

      <div className="flex-1 flex items-center justify-center">

      <div className="h-130 bg-white w-3xl rounded-t-lg shadow-lg">
        <div className="h-14 bg-yellow-300 flex items-center px-4 text-white font-bold rounded-t-lg">
          home
        </div>

        <div className="flex flex-col items-center justify-center h-2/4 space-y-4 mb-20">
            <h1 className="text-2xl font-bold text-center">hi, im alexis :D!</h1>
            <h1 className="text-2xl font-bold text-center">welcome to this site! how did u get here?</h1>
        </div>
        <div className="flex flex-row space-x-25 justify-center">
          <div>about me</div>
          <div>projects</div>
          <div>certificates</div>
          <div>contact</div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home;