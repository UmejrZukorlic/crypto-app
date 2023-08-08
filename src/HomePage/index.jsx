import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
