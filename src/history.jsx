
import { useContext } from "react";
import { DataContext } from "./datacontext";

export default function ShowData({children}) {

const {data}=useContext(DataContext);

return(
    
    <>
   <div className="h-full w-full">
     <h1>Detection Data</h1>

    {data.map((item)=>(
        <div className="bg-[#1F2937] border-[1px] border-white" key={item.id}>
            <p>{item.status}</p>
            <p>{item.time}</p>
        </div>
    ))}
   </div>
    </>
)

}