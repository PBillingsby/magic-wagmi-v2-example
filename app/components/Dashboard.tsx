import { useAccount } from "wagmi";
import Wallet from "./Wallet";
import SignIn from "./Login";

export default function Dashboard() {
  const { isConnected, isConnecting } = useAccount();

  return (
    <>
      {isConnected ? (
        <Wallet />
      ) : isConnecting ? (
        <p className="text-center">...loading</p>
      ) : (
        <SignIn />
      )}
    </>
  );
}
