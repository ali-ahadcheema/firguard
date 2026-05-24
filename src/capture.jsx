import { useState,useRef, useCallback, useEffect } from "react";
import { db } from "./firebase";
import Webcam from "react-webcam";
import { push, ref } from "firebase/database";

export default function Capture(){
    const webcamref=useRef(null);
    const [img,setimg]=useState(null);
    const [status,setstatus]=useState("loading");
    const[devices,setdevice]=useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

 useEffect(()=>{
  navigator.mediaDevices.enumerateDevices().then((devices)=>{
    const videoref=devices.filter((device)=>device.kind==="videoinput");
    setdevice(videoref);
    if(videoref.length>0){
      setSelectedDevice(videoref[0].deviceId);
    }
  })
 },[])
 
const videoConstraints = {
  deviceId: selectedDevice,
  width: 1280,
  height: 720,
};
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

   const savedata=async(curentdata)=>{
  try{
    await push(ref(db,"detections"),{
      status:curentdata,
      time:new Date().toLocaleDateString(),
    })
    console.log("data save")
  }
  catch(error){
    console.log(error)
  }
 }


 const detction=async(imgsrc)=>{
  
      const respo = await fetch(
  "https://detect.roboflow.com/fire-and-smoke-detection-ztqae/1?api_key=eXMBcRLq4skpw7JJVz27",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: imgsrc.split(",")[1], 
  }
);
let firedetec=false;
    const data=await respo.json();
    console.log(data);
    if (data.predictions.length > 0) {
  data.predictions.forEach((p) => {
    console.log(p.class, p.confidence);

    if (p.class === "fire") {
      setstatus("🔥 Fire Detected");
      savedata("fire detected")
    }
  });
} else {
  setstatus("✅ Safe");
  savedata("safe")
}
 }
 console.log(devices);


    return(
        <>
        <div className="h-full w-full">
<h1 className="text-2xl">webcam photo</h1>
<select
  onChange={(e) => setSelectedDevice(e.target.value)}
  className="mt-4"
>
  {devices.map((device, index) => (
    <option key={device.deviceId} value={device.deviceId}>
      {device.label || `Camera ${index + 1}`}
    </option>
  ))}
</select>
 {img ? (
        <img className="w-full mt-10 h-60" src={img} alt="capture" />
      ) : (
        // ✅ videoConstraints now actually passed in
        selectedDevice && (
          <Webcam
            ref={webcamref}
            videoConstraints={videoConstraints}
            className="w-56 h-52 ml-80 border-0 rounded"
          />
        )
      )}
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