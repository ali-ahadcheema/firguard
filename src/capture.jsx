import { useState, useRef, useCallback, useEffect } from "react";
import { db } from "./firebase";
import Webcam from "react-webcam";
import { push, ref } from "firebase/database";

export default function Capture() {

  const webcamref = useRef(null);
  const alarmref = useRef(null);

  const [img, setimg] = useState(null);
  const [status, setstatus] = useState("Loading...");

  
  useEffect(() => {

    alarmref.current = new Audio("/alarm.mp3");

    alarmref.current.loop = true;

  }, []);


  const videoConstraints = {
    facingMode: "user",
  };

  
  const capture =useCallback(() => {

    if (!webcamref.current) return;

    const imgsrc = webcamref.current.getScreenshot();

    if (!imgsrc) return;

    setimg(imgsrc);

    detction(imgsrc);

  })

 
useEffect(()=>{
  const interval=setInterval(() => {
    capture()
  }, 10000);
  return()=> clearInterval(interval)
},[capture])




 
  const retake = () => {

    setimg(null);

    if (alarmref.current) {

      alarmref.current.pause();

      alarmref.current.currentTime = 0;
    }
  };

  
  const download = () => {

    const a = document.createElement("a");

    a.href = img;

    a.download = "capture.png";

    a.click();
  };

  // Fire detection
  const detction = async (imgsrc) => {

    try {

      setstatus("Detecting...");

      const response = await fetch(
        "https://serverless.roboflow.com/firedetection-upd0y/1?api_key=eXMBcRLq4skpw7JJVz27",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: imgsrc.split(",")[1],
        }
      );

      const data = await response.json();

      console.log(data);

      let fireFound = false;
      let smokeFound = false;

      if (data.predictions && data.predictions.length > 0) {

        data.predictions.forEach((p) => {

          if (p.class.toLowerCase() === "fire") {
            fireFound = true;
          }

          if (p.class.toLowerCase() === "smoke") {
            smokeFound = true;
          }

        });

        // Fire
        if (fireFound) {

          setstatus("🔥 Fire Detected");

          savedata("fire detected");

          if (alarmref.current) {

            alarmref.current.currentTime = 0;

            alarmref.current.play();

            setTimeout(() => {

              alarmref.current.pause();

              alarmref.current.currentTime = 0;

            }, 20000);
          }

        }

        // Smoke
        else if (smokeFound) {

          setstatus("💨 Smoke Detected");

          savedata("smoke detected");
        }

        // Other object
        else {

          setstatus("⚠ Object Detected");

          savedata("object detected");
        }

      }

      // Safe
      else {

        setstatus("✅ Safe");

        savedata("safe");

        if (alarmref.current) {

          alarmref.current.pause();

          alarmref.current.currentTime = 0;
        }
      }

    }

    catch (error) {

      console.log(error);

      setstatus("❌ Detection Failed");
    }
  };

  // Save Firebase data
  const savedata = async (currentdata) => {

    try {

      await push(ref(db, "detections"), {
        status: currentdata,
        time: new Date().toLocaleString(),
      });

      console.log("Data Saved");

    }

    catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="h-full w-full flex flex-col items-center mt-10">

      <h1 className="text-3xl font-bold">
        Fire Detection Camera
      </h1>

    <Webcam
  audio={false}
  ref={webcamref}
  screenshotFormat="image/png"
  videoConstraints={videoConstraints}
  onUserMediaError={(err) => {
    console.log(err);
    setstatus("❌ Camera Error");
  }}
  className="w-96 h-72 mt-6 rounded-lg"
/>
     
      <div className="flex gap-4 mt-6">

        <button
          className="bg-red-700 text-white px-4 py-2 rounded"
          onClick={capture}
        >
          Capture
        </button>

        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={retake}
        >
          Retake
        </button>

        <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={download}
        >
          Download
        </button>

      </div>

      <h1 className="text-2xl font-bold mt-6">
        Current Situation
      </h1>

      <p className="mt-3 text-lg">
        {status}
      </p>

    </div>
  );
}