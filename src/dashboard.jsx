import { useState } from "react";

export default function Dashboard(){
    return(
        <>
        <div className="h-6 w-full flex justify-between items-center   border-b-[1px] border-gray-200">
<div className="flex items-center gap-2">
    <img className="h-5 w-6" src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF"></img>
    <p className="font-medium text-white">Dashboard</p>
</div>
{/*links profile */}
<div className="flex gap-2 items-center">
        <img className="h-5 w-6" src="https://img.icons8.com/?size=100&id=84025&format=png&color=FFFFFF"></img>
        <img className="h-6 w-6 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzvN4bFZJPB9QTpRFChZFJtthV-qhLq-H2g&s"></img>
       <p className="text-white text-sm">jhon doe</p>
</div>
        </div>
        </>
    )
}