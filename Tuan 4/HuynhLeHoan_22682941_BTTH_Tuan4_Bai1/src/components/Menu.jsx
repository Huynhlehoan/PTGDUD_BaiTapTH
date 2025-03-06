import { useEffect, useState } from "react";

function Menu(){
    const [array, setArray]=useState([]);

    useEffect(()=>{
        var fn= fetch('https://67c81bdb0acf98d07084e04f.mockapi.io/Menu');
        var fn1= fn.then((res)=>{return res.json();})
        var fn2 = fn1.then((data)=>{
            setArray(data);
        })
    })
    return(
<>
</>
    );
} export default Menu;