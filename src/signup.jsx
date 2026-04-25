import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "./firebase";
import Login from "./login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

 
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const  handelsubmit=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      const user=userCredential.user;
      console.log(user);
      alert("user created succesfully");
    })
    .catch((error)=>{
      console.log(error.code);
      console.log(error.message);
    })
  }
    return(
       
        <>
       <div className="h-full w-full justify-center items-center ml-64 mt-24">
         <div className="bg-[#1F2937]  h-60 w-80 border-0 rounded-lg">
           <form className="flex flex-wrap items-center" onClick={handelsubmit}>
             <h1 className="font-bold text-white mt-5 ml-4">Please sign up</h1>
            <input className="h-6 w-72 border-[1px]  border-gray-400 rounded mt-4 ml-4" type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className="h-6 w-72 border-[1px] border-gray-400 rounded ml-4 mt-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <button className="bg-[#0F172A] text-white font-medium py-2 px-4 rounded mt-5 ml-27  " type="submit" onClick={handelsubmit}>sign up</button>
              <p className="text-sm text-white mt-3 ml-18">Already have an account ? <Link to="/login" className="text-red-600">Login</Link></p>
           </form>
        </div>
       </div>
        </>
    )
}
