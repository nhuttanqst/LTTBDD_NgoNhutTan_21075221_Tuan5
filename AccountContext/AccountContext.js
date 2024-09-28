import { createContext, useEffect, useState } from "react";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState([]);

  const saveAccount = (accountItem) => {
    setAccount([...account, accountItem]);
  };

  useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <AccountContext.Provider value={{ account, saveAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, AccountProvider };
