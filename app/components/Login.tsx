"use client";
import { useConnect } from "wagmi";

const SignIn = () => {
  const { connect, connectors, isIdle, isPending } = useConnect();

  return (
    <div className="mx-auto">
      <button
        className="mx-auto bg-[#a799ff] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => connect({ connector: connectors[0] })}
      >
        {isPending ? "Loading..." : isIdle ? "Connect" : "Connecting..."}
      </button>
    </div>
  );
};

export default SignIn;
