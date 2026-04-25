import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import{FaHome,FaCamera,FaHistory,FaUser,FaCog}from"react-icons/fa"
import Dashboard from './dashboard.jsx'
import Signup from './signup.jsx'
import Login from './login.jsx';
function App() {
  return (
    <BrowserRouter> 

      <div className="grid grid-cols-12 bg-[#0F172A] min-h-screen ">

        {/* Sidebar */}
        <div className="col-span-2 border-r-[0.5px]   top-0 h-full bg-[#111827] border-gray-200 ">
          <div className='flex flex-col h-full  justify-evenly gap-40 items-center'>
            <div>
          <div className="flex gap-2 mr-3 mb-6">
            <img 
              className="h-8 w-8" 
              src="https://img.icons8.com/?size=100&id=QV5JEtrTP6nH&format=png&color=FA5252"
            />
            <p className="text-white text-sm">
              <span className="text-xl font-bold">FIRE</span>{" "}
              <span className="text-xl font-bold text-orange-600">GUARD</span>
              <br />
              Fire detection system
            </p>
          </div>
        <ul className='list-none flex flex-col  gap-1.5'>
          <li className='h-10 w-40'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/dashboard"><FaHome size={20}/> Dashboard</Link></li>
             <li className='h-10 w-40'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/camera"><FaCamera size={20}/> Detecticon</Link></li>
             <li className='h-10 w-40'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/history"><FaHistory size={20}/> History</Link></li>
               <li className='h-10 w-40'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/signup"><FaUser size={20}/> Profile</Link></li>
                <li className='h-10 w-40'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/settings"><FaCog size={20}/> setting</Link></li>
        </ul>
        </div>
        <div className=' justify-center h-24 w-40 border-[1px] mr-1.5 border-orange-500'>
<div className='flex gap-1 mt-2'>  <img className="h-8 w-8 ml-2 "  src="https://img.icons8.com/?size=100&id=QV5JEtrTP6nH&format=png&color=FA5252" /><span className='text-orange-500 font-medium'>EMERGENCY</span>
</div>
<p className='text-white ml-8'>If you see fire <br/> call <span className='text-orange-500 font-medium'>101</span></p>
        </div>
       </div>

        </div>

        {/* Main Content */}
        <div className="col-span-10 p-6   text-white">
        
    <Routes>
       <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}

export default App
