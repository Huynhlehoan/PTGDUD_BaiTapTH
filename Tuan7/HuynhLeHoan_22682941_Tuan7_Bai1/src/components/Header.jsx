import logo from '../assets/Lab_05/Image 1858.png';
import bell from '../assets/Lab_05/Bell 1.png';
import question from '../assets/Lab_05/Question 1.png';
import avatar1 from '../assets/Lab_05/Avatar 313.png';
import search from '../assets/Lab_05/Search.png';
import '../App.css'


function Header() {
  return (
    <div className="header flex space-x-3">
      <img className="logo" src={logo} alt="logo" />
      <h2 className="text-pink-500 font-bold text-2xl">Dashboard</h2>
      <div className="flex" style={{ marginLeft: '700px' }}>
        <img src={search} alt="search" className="ava" style={{ marginTop: '5px' }} />
        <input className="inpSearch px-24 py-1 bg-gray-200 rounded-lg" type="text" placeholder="search..." />
      </div>
      <img src={bell} alt="bell" className="ava" />
      <img src={question} alt="question" className="ava" />
      <img src={avatar1} alt="avatar" className="ava" />
    </div>
  );
}

export default Header;
