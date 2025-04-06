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
    <div className="menu flex flex-col gap-4 p-4 bg-white">
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
      <img src={Group} alt="" className="mx-auto mt-4" />
      <button className="bg-white border border-blue-500 rounded-lg px-10 py-2 mx-auto mt-2">Try now</button>
    </div>
  );
}

export default Sidebar;
