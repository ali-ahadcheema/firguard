import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "./firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navi=useNavigate()
    const auth=getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
const handelogin=async(e)=>{
  e.preventDefault();
  try{
    const usercredential=await signInWithEmailAndPassword(auth,email,password);
    if(!usercredential){
        console.log("user not find")
    }
    const user=usercredential.user;
    const token=await user.getIdToken();
    console.log("token",token)
    setTimeout(()=>{
navi("/dashboard")
    },2000)
  }
  catch(error){
    console.log(error)
  }
}
    return(
        <>
        <div className="h-full w-full justify-center items-center ml-64 mt-24">
         <div className="bg-[#1F2937]  h-60 w-80 border-0 rounded-lg">
           <form className="flex flex-wrap items-center" >
             <h1 className="font-bold text-white mt-5 ml-4">Please Log in</h1>
            <input className="h-6 w-72 border-[1px]  border-gray-400 rounded mt-4 ml-4" type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className="h-6 w-72 border-[1px] border-gray-400 rounded ml-4 mt-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <button className="bg-[#0F172A] text-white font-medium py-2 px-4 rounded mt-5 ml-30  " onClick={handelogin}>log in</button>
           </form>
        </div>
       </div>
        </>
    )
}