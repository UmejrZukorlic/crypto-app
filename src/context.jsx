import React, { createContext, useState } from "react";
const MyContext = createContext();
export { MyContext };
const Context = (props) => {
  const [baseUrl, setBaseUrl] = useState("https://api.coingecko.com/api/v3/");
  return (
    <MyContext.Provider value={{ baseUrl, setBaseUrl }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
