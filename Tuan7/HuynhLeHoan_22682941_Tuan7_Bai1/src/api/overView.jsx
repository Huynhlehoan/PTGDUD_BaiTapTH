import { useEffect, useState } from "react";

const useOverviewData = () => {
  const [turnover, setTurnover] = useState(null);
  const [profit, setProfit] = useState(null);
  const [newCustomer, setNewCustomer] = useState(null);

  useEffect(() => {
   
    fetch("http://localhost:3001/turnover")
      .then((res) => res.json())
      .then((data) => setTurnover(data));

    fetch("http://localhost:3001/profit")
      .then((res) => res.json())
      .then((data) => setProfit(data));

    fetch("http://localhost:3001/new-customer")
      .then((res) => res.json())
      .then((data) => setNewCustomer(data));
  }, []);

  return { turnover, profit, newCustomer };
};

export default useOverviewData;  
