import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import { useWallet } from "@thirdweb-dev/react";
import WalletAuth from "./components/WalletAuth";
import { useEffect, useMemo } from "react";
import client from "./sanityClient";

function App() {
  const wallet = useWallet();
  // since wallet is either undefined or an object so I am using it to identify whether wallet is connected or not
  useEffect(() => {
    if (!wallet) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: await wallet?.getAddress(),
        userName: "Unnamed",
        walletAddress: await wallet?.getAddress(),
      };
      await client.createIfNotExists(userDoc);
    })();
  }, [wallet]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={wallet ? <Hero /> : <WalletAuth />} />
        <Route path="/collections/:id" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
