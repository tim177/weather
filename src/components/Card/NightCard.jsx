import React from "react";
import Colder from "../../public/Colder";

function NightCard() {
  return (
    <div>
      {/* Nighty */}
      <div class="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-gray-900">
        <div class="text-md font-bold flex flex-col text-white">
          <span class="uppercase">Today</span>
          <span class="font-normal text-white text-sm">October 22</span>
        </div>
        <div class="w-32 h-32 flex items-center justify-center">
          <Colder />
        </div>
        <p class="text-white mb-2">Partly cloud</p>
        <div class="text-3xl font-bold text-white mb-6">
          32º<span class="font-normal text-white mx-1">/</span>20º
        </div>
      </div>
    </div>
  );
}

export default NightCard;
