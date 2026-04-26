import { useState,useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

export default function Capture(){
    const webcamref=useRef(null);
    const [img,setimg]=useState(null);
    const [status,setstatus]=useState("loading");
    const[devices,setdevice]=useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);


    {/*auto detect camera*/}
  useEffect(()=>{
    navigator.mediaDevices.enumerateDevices().then((d)=>{
      const cameras=d.filter((device)=>device.kind==="videoinput");
      setdevice(cameras);
      const droid=cameras.find((camera)=>camera.label.toLocaleLowerCase().includes("droid"));
      if(droid){
  setSelectedDevice(droid.deviceId);}
  else{
setSelectedDevice(cameras[0]?.deviceId);
  }
      }
    )
  },[])


    const capture=useCallback(()=>{
        if (!webcamref.current) return;
        const imgsrc=webcamref.current.getScreenshot();
        setimg(imgsrc);
        detction(imgsrc);
    },[]);

    const retake=()=>setimg(null);

    const download=()=>{
        const a=document.createElement('a');
        a.href=img;
        a.download="capture.png";
        a.click();
    }

  

 const detction=async(imgsrc)=>{
  
      const respo = await fetch(
  "https://detect.roboflow.com/fire-and-smoke-detection-ztqae/1?api_key=eXMBcRLq4skpw7JJVz27",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: imgsrc.split(",")[1], // ✅ send image
  }
);

    const data=await respo.json();
    console.log(data);
    if (data.predictions.length > 0) {
  data.predictions.forEach((p) => {
    console.log(p.class, p.confidence);

    if (p.class === "fire") {
      setstatus("🔥 Fire Detected");
    }
  });
} else {
  setstatus("✅ Safe");
}
 }


    return(
        <>
        <div className="h-full w-full">
<h1 className="text-2xl">webcam photo</h1>
{img?<img className="w-full mt-10  h-60" src={img} alt="picture"></img>:<Webcam ref={webcamref} className="w-56 h-52 ml-80 border-0 rounded "></Webcam>}
     <div className=" flex ml-96 gap-2 mt-10" >
        {img ? (
          <>
            <button className="bg-red-700 text-white font-medium h-8 w-28 border-0 rounded cursor-pointer" onClick={retake}>Retake</button>
            <button className="bg-blue-500 text-white font-medium h-8 w-28 border-0 rounded cursor-pointer" onClick={download}>Download</button>
          </>
        ) : (
          <button className="bg-red-700 text-white font-medium h-8 w-28 border-0 rounded cursor-pointer" onClick={capture}>Take picture</button>
        )}
      </div>
      <h className="text-xl font-bold mt-4">Current Situation</h>
      <p className="mt-5">{status}</p>
        </div>
        </>
    )
}