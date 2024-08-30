"use client";
import { useAccount, useDisconnect, useBalance, useEstimateGas } from "wagmi";
import SendTransaction from "./SendTransaction";
import Divider from "./Divider";
import SignMessage from "./SignTransaction";

const Wallet = () => {
  const { address, connector: activeConnector, status, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: bal, isError, isLoading, error } = useBalance({ address });

  return (
    <div className="container-md border border-stone-200 rounded-sm p-2">
      <div>Connector: {activeConnector?.name}</div>
      {chain && <div>Chain: {chain?.name}</div>}
      <div>Wallet Address: {address}</div>
      {error ?
        <div>{error.message}</div>
        :
        <div>
          Balance: {bal?.formatted} {bal?.symbol}
        </div>
      }
      <Divider />
      <SignMessage />
      <Divider />
      <SendTransaction />
      <Divider />
      <div className="flex justify-center">
        <button className="text-center bg-[#ff9b80] hover:bg-gradient-to-t hover:from-[#ff9b80] hover:to-[#ff9b80] hover:bg-opacity-[0.05] active:bg-[#d43100] text-white font-bold py-2 px-4 rounded" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default Wallet;
