

import { useEffect, useState } from "react";

import ava from '../img/ava.jpg';
import '../styles/main.css'

function Header() {
    const [array,setArray]=useState([]);
    useEffect(() => {
        var fn= fetch('https://67c81bdb0acf98d07084e04f.mockapi.io/Menu_Header');
        var fn1= fn.then((res)=>{return res.json();})
        var fn2 = fn1.then((data)=>{
            setArray(data);
        })
    },[])
  return (
    <div className="container-flex">
        <header className="header">
    <img src="" alt="Logo" className="Chefify" />
     <input type="text" placeholder="Search..." className="search-bar" />
     <ul className="menu">
        {
            array.map((item,index)=>{
                return(
                    <li key={index}>{item.name}</li>
                )
            })
        }
    </ul>
    <button className="btn btn-recipe-box">Your Recipe Box</button>
  <img width="70px" height="60px" src={ava} />
  </header>
    </div>
    // <header className="header">
    //   <img src={logo} alt="Logo" className="logo" />
    //   <input type="text" placeholder="Search..." className="search-bar" />
    //   <ul className="menu">
    //     <li><a href="#">What to cook</a></li>
    //     <li><a href="#">Recipes</a></li>
    //     <li><a href="#">Ingredients</a></li>
    //     <li><a href="#">Occasions</a></li>
    //     <li><a href="#">About us</a></li>
    //   </ul>
    //   <button className="recipe-box">Your Recipe Box</button>
    //   <img width="70px" height="60px" src={ava} />
    // </header>
  );
}

export default Header;