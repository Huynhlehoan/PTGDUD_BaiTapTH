
import { useEffect, useState } from "react";
const Overview = () => {
    const [turnover, setTurnover] = useState(null);
    const [profit, setProfit] = useState(null);
    const [newCustomer, setNewCustomer] = useState(null);
    useEffect(() => {
      fetch("http://localhost:3000/turnover")
        .then((res) => res.json())
        .then((data) => setTurnover(data));
  
      fetch("http://localhost:3000/profit")
        .then((res) => res.json())
        .then((data) => setProfit(data));
  
      fetch("http://localhost:3000/new-customer")
        .then((res) => res.json())
        .then((data) => setNewCustomer(data));
    }, []);

}; export default Overview;