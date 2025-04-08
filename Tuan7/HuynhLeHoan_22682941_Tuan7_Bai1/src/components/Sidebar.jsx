import { NavLink } from 'react-router-dom';
import logo1 from '../assets/Lab_05/Squares four 1.png';
import logo2 from '../assets/Lab_05/Folder.png';
import logo3 from '../assets/Lab_05/Groups.png';
import logo4 from '../assets/Lab_05/Pie chart.png';
import logo5 from '../assets/Lab_05/Chat.png';
import logo6 from '../assets/Lab_05/Code.png';
import Group from '../assets/Lab_05/Group.png';

function Sidebar() {
  return (
    <div className="menu flex flex-col gap-4 p-4 bg-white border-r-2">
      <NavLink to="/" className={({ isActive }) => isActive ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' : 'flex items-center gap-x-2 px-3 py-2'}>
        <img src={logo1} alt="" /> Dashboard
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' : 'flex items-center gap-x-2 px-3 py-2'}>
        <img src={logo2} alt="" /> Projects
      </NavLink>
      <NavLink to="/teams" className={({ isActive }) => isActive ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' : 'flex items-center gap-x-2 px-3 py-2'}>
        <img src={logo3} alt="" /> Teams
      </NavLink>
      <NavLink to="/analytics" className={({ isActive }) => isActive ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' : 'flex items-center gap-x-2 px-3 py-2'}>
        <img src={logo4} alt="" /> Analytics
      </NavLink>
      <NavLink to="/messages" className={({ isActive }) => isActive ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' : 'flex items-center gap-x-2 px-3 py-2'}>
        <img src={logo5} alt="" /> Messages
      </NavLink>
      <NavLink to="/integrations" className={({ isActive }) => isActive ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' : 'flex items-center gap-x-2 px-3 py-2'}>
        <img src={logo6} alt="" /> Integrations
      </NavLink>
      <div className='bg-blue-100 mt-16'>
          <img src={Group} alt="" className="mx-auto mt-4" />
          <h2 className='text-black font-bold text-xl text-center'>V2.0 is available</h2>
      <button className="bg-white border border-blue-500 rounded-lg px-16 py-2 mt-2 ms-2  mb-5">Try now</button>
      </div>
    
    </div>
  );
}

export default Sidebar;
