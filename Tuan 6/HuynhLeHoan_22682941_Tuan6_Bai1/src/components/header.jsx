import { useState,useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'



function header(){
    const [array,setArray]= useState([]);
    useEffect(()=>{
        var fn=fetch("https://67c81bdb0acf98d07084e04f.mockapi.io/Menu_Header");
        var fn1= fn.then((res)=>{
            return res.json();
        }).then((data)=>{
            setArray(data);
        })
    },[])
    return (
       
           <header className='navbar navbar-expand'>
            
                <ul className='navbar-nav'>
                    {
                        array.map((item,index)=>{
                            return(
                                <li key={index} className='nav-item'>
                                   <a href="" className='nav-link'>{item.name}</a>
                                </li>
                            )
                        })
                    }
                   
                </ul>

           </header>
      
    )
} export default header;