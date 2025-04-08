import logo from '../assets/Lab_05/Image 1858.png';
import bell from '../assets/Lab_05/Bell 1.png';
import question from '../assets/Lab_05/Question 1.png';
import avatar1 from '../assets/Lab_05/Avatar 313.png';
import search from '../assets/Lab_05/Search.png';
import '../App.css'


function Header() {
  return (
    <div className="header flex justify-between items-center px-4  border-b-2">
    <div className="flex items-center gap-x-4">
      <img className="logo" src={logo} alt="logo" />
      <h2 className="text-pink-500 font-bold text-2xl ml-14">Dashboard</h2>
    </div>
  
    <div className="flex ml-auto items-center gap-x-2">
      <img src={search} alt="search" className="ava mt-1" />
      <input className="inpSearch px-16 py-1 bg-gray-200 rounded-lg" type="text" placeholder="search..." />
    </div>
  
    <div className="flex items-center gap-x-2">
      <img src={bell} alt="bell" className="ava" />
      <img src={question} alt="question" className="ava" />
      <img src={avatar1} alt="avatar" className="ava" />
    </div>
  </div>
  
  );
}

export default Header;
