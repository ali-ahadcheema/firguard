import { useState } from "react";
import { FaBell,FaHamburger,FaFire,FaChevronUp,FaRunning,FaStopCircle,FaPhone } from "react-icons/fa";
import { ShieldCheck,AlertTriangle,Upload,Play, } from "lucide-react";
import {Flame} from "lucide-react"

export default function Dashboard(){
    return(
        <>
        {/*second nav*/}
        <div className="h-6 w-full flex justify-between items-center    border-b-[1px] border-gray-200">
<div className="flex items-center gap-2">
    <img className="h-5 w-6" src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF"></img>
    <p className="font-medium text-white">Dashboard</p>
</div>
{/*links profile */}
<div className="flex gap-2 items-center">
    <FaBell size={18} color="white"/>
        <img className="h-6 w-6 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzvN4bFZJPB9QTpRFChZFJtthV-qhLq-H2g&s"></img>
       <p className="text-white text-sm">jhon doe</p>
</div>
        </div>
<div className="flex items-center gap-3 ml-4 mt-6">
    <div className=" flex items-center gap-2  bg-[#1F2937] h-24 w-72 border-[1px] border-[#374151] rounded-lg">
<Flame size={24} color="white" className="bg-red-600 h-12 w-12 border-0 rounded-full ml-4"/>
<p className="text-sm"><span className="font-medium text-white">Total ALerts</span><br/><span className="text-3xl text-red-600">24</span><br/><span className="text-red-600 flex items-center gap-1"><FaChevronUp size={16} color="red"/> 12% <span className="text-white">from last week</span> </span></p>
    </div>
      <div className=" flex items-center gap-2  bg-[#1F2937] h-24 w-72 border-[1px] border-[#374151] rounded-lg">
 <AlertTriangle size={18} color="white" className="bg-red-600 h-12 w-12 border-0 rounded-full ml-4"/>
<p className="text-sm"><span className="font-medium text-white">Fire Detected</span><br/><span className="text-3xl text-red-600">24</span><br/><span className="text-red-600 flex items-center gap-1"><FaChevronUp size={16} color="red"/> 12% <span className="text-white">from last week</span> </span></p>
    </div>
      <div className=" flex items-center gap-2  bg-[#1F2937] h-24 w-72 border-[1px] border-[#374151] rounded-lg">
<ShieldCheck size={24} color="white" className="bg-emerald-700 h-12 w-12 border-0 rounded-full ml-4"/>
<p className="text-sm"><span className="font-medium text-white">Safe Scans</span><br/><span className="text-3xl text-emerald-700">24</span><br/><span className="text-emerald-700 flex items-center gap-1"><FaChevronUp size={16} color="emerald"/> 12% <span className="text-white">from last week</span> </span></p>
    </div>
</div>

{/*Backend*/}

<div className="flex  gap-3 mt-3 ml-8">
    <div className="bg-[#1F2937] h-60 w-lg border-[1px] border-[#374151] rounded-lg ">
<div className="flex justify-evenly items-center gap-52">
    <p className="font-medium text-white">Live Detecteion</p>
    <p className="text-red-500">Live</p>
</div>
<img className="h-36 w-96 border-0 rounded ml-15 mt-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7MO6GmOypVwyo48h8Za97ChdfJjaBwB3pg&s"></img>
<div className="flex items-center gap-1.5 mt-4 ml-15">
    <button className="bg-red-500 h-8 w-48 text-white border-0 rounded ">Stop detection</button>
    <button className="bg-[#0F172A] justify-center h-8 w-48 flex items-center gap-1.5 text-white border-0 rounded "><Upload size={16} color="white" /> Upload image </button>
</div>
    </div>
    <div className="bg-[#1F2937]  h-64 w-80 border-[1px] border-[#374151] rounded-lg">
       <div className="flex justify-around gap-7">
        <h1 className="font-medium text-white">Recent Alersts</h1>
        <h1 className="text-red-500">View All</h1>
       </div>
       <div className=" h-52 w-72 border-[1px] border-gray-400 ml-3.5 mt-2 rounded ">
<div className="flex items-center h-17  border-b-[1px] border-gray-400 w-full hover:border-0  justify-around transition duration-150 ease-in-out hover:scale-105">
    <div className="flex items-center gap-2 ">
        <img className="h-8 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7MO6GmOypVwyo48h8Za97ChdfJjaBwB3pg&s"></img>
    <p className="text-sm text-white" ><span className="font-medium  text-white">Fire detectd in living room</span><br/>12 may 2024,10.30 am</p>
    </div>
    <p className="bg-amber-900 text-red-600 w-8 text-center h-5 border-0 rounded font-medium">Fire</p>
</div>
<div className="flex items-center h-17 border-b-[1px] border-gray-400 w-full hover:border-0  justify-around transition duration-150 ease-in-out hover:scale-105">
    <div className="flex items-center gap-2 ">
        <img className="h-8 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7MO6GmOypVwyo48h8Za97ChdfJjaBwB3pg&s"></img>
    <p className="text-sm text-white" ><span className="font-medium  text-white">Fire detectd in living room</span><br/>12 may 2024,10.30 am</p>
    </div>
    <p className="bg-amber-900 text-red-600 w-8 text-center h-5 border-0 rounded font-medium">Fire</p>
</div>
<div className="flex items-center   w-full hover:border-0  justify-around transition duration-150 ease-in-out hover:scale-105">
    <div className="flex items-center gap-2 mt-3 ">
        <img className="h-8 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7MO6GmOypVwyo48h8Za97ChdfJjaBwB3pg&s"></img>
    <p className="text-sm text-white" ><span className="font-medium  text-white">Fire detectd in living room</span><br/>12 may 2024,10.30 am</p>
    </div>
    <p className="bg-amber-900 text-red-600 w-8 text-center h-5 border-0 rounded font-medium mt-2">Fire</p>
</div>
       </div>
    </div>
</div>
<div className="flex ml-8 gap-3 mt-3">
    <div className=" bg-[#1F2937] h-48 w-lg border-0 rounded-lg">
        <div className="flex justify-around">
      <p className="font-medium text-white">SAFETY INSTRUCTIONS</p>
      <p className="font-medium text-red-700">VIEW ALL</p>
    </div>
    <div className="flex gap-7 justify-center  mt-1">
       <div className="bg-[#0F172A] flex flex-wrap justify-center items-center border-0 rounded h-40 w-32 transition duration-150 ease-in-out hover:scale-105 cursor-pointer">
<FaRunning size={20} color="white" className="bg-emerald-700 h-12 w-12 border-0 rounded-full mt-2"/>
<p className="font-medium text-white">STAY CALM</p>
<p className="text-sm text-gray-400 ml-4">Dont panic,Take deep breeth<br/>
 stay calm </p>
    </div> 
          <div className="bg-[#0F172A] flex flex-wrap justify-center items-center border-0 rounded h-40 w-32 transition duration-150 ease-in-out hover:scale-105 cursor-pointer">
<FaStopCircle size={24} color="white" className="bg-emerald-700 h-12 w-12 border-0 rounded-full mt-2 "/>
<p className="font-medium text-white">Evacution ways</p>
<p className="text-sm text-gray-400 ml-5">Use stair, not elevator move<br/>
 nearist exist. </p>
    </div> 
          <div className="bg-[#0F172A] flex flex-wrap justify-center items-center border-0 rounded h-40 w-32 transition duration-150 ease-in-out hover:scale-105 cursor-pointer">
<FaPhone size={20} color="white" className="bg-emerald-700 h-12 w-12 border-0 rounded-full mt-2"/>
<p className="font-medium text-white">Call Emergency</p>
<p className="text-sm text-gray-400 ml-4">Call Emergency Services immediately.</p>
    </div> 
    </div>
    
    </div>
    <div className="bg-[#1F2937] h-48 w-80 border-0 rounded-lg">
    <h1 className="font-medium text-white mt-3 ml-2">System Status</h1>
    <div className="flex gap-4 mt-2">
<ShieldCheck size={18} color="white" className="bg-emerald-700 h-12 w-12 border-0 rounded-full mt-2 ml-4"/>
<p className="text-sm text-gray-400"><span className="font-medium text-emerald-600">All System Operational</span><br/>Your sysatem is working properly<br/>
   and monitoring is active.</p>
    </div>

    {/*backedn */}
    <div className=" flex gap-2 border-[1px] border-gray-400 h-16 w-72 ml-3.5 mt-3 rounded">
     <div className="border-r-[1px] w-24  text-center border-gray-400">
<p className="font-medium text-white">CAMERA</p>
<p className="text-emerald-700 font-medium">Online</p>
     </div>
     <div className="border-r-[1px] text-center w-24 border-gray-400">
<p className="font-medium text-white">CAMERA</p>
<p className="text-emerald-700 font-medium">Online</p>
     </div>
          <div className="border-r-[1px] text-center w-24 border-gray-400">
<p className="font-medium text-white">CAMERA</p>
<p className="text-emerald-700 font-medium">Online</p>
     </div>
    </div>
    </div>
</div>  
</>
    )
}