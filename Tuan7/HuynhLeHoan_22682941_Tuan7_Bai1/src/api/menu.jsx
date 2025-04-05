import { useEffect, useState } from "react";

const Menu = ()=>{
    const [menu, setMenu]=useState([]);
    useEffect(() => {
        fetch("https://67c81bdb0acf98d07084e04f.mockapi.io/Menu_Header")
          .then((res) => res.json())
          .then(setMenu);
      }, []);
}; export default Menu;