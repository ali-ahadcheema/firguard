import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './dashboard'

function App() {
  return (
    <BrowserRouter> {/* ✅ important */}

      <div className="grid grid-cols-12 bg-[#0F172A] min-h-screen">

        {/* Sidebar */}
        <div className="col-span-2 border-r-[0.5px] bg-[#111827] border-gray-200 ">
          <div className='flex flex-col h-full justify-evenly gap-40 items-center'>
            <div>
          <div className="flex gap-2 mb-6">
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
        <ul className='list-none flex flex-col gap-1.5'>
          <li className='h-10 w-44'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/dashboard"><img className='h-7 w-8' src='https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=FFFFFF'></img> Dashboard</Link></li>
             <li className='h-10 w-44'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/content"><img className='h-7 w-8' src='https://img.icons8.com/?size=100&id=11741&format=png&color=FFFFFF'></img> Detecticon</Link></li>
             <li className='h-10 w-44'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/content"><img className='h-7 w-8' src='https://img.icons8.com/?size=100&id=86125&format=png&color=FFFFFF'></img> History</Link></li>
               <li className='h-10 w-44'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/content"><img className='h-7 w-8' src='https://img.icons8.com/?size=100&id=98957&format=png&color=FFFFFF'></img> Profile</Link></li>
                <li className='h-10 w-44'><Link className='flex gap-2 text-white items-center transition duration-150 ease-in-out hover:border-0 hover:rounded hover:bg-orange-500 hover:scale-105 ' to="/content"><img className='h-7 w-8' src='https://img.icons8.com/?size=100&id=364&format=png&color=FFFFFF'></img> setting</Link></li>
        </ul>
        </div>
        <div className=' justify-center h-24 w-40 border-[1px] border-orange-500'>
<div className='flex gap-1 mt-2'>  <img className="h-8 w-8 ml-2 "  src="https://img.icons8.com/?size=100&id=QV5JEtrTP6nH&format=png&color=FA5252" /><span className='text-orange-500 font-medium'>EMERGENCY</span>
</div>
<p className='text-white ml-8'>If you see fire <br/> call <span className='text-orange-500 font-medium'>101</span></p>
        </div>
       </div>

        </div>

        {/* Main Content */}
        <div className="col-span-10 p-6 text-white">
          <Dashboard/>
        </div>
<Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
