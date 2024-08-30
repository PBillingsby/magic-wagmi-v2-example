import { useState } from "react";
import {
  useSendTransaction,
} from "wagmi";
import { useDebounce } from "use-debounce";
import { parseEther } from "viem";

const SendTransaction = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const [debouncedAddress] = useDebounce(address, 500);
  const [debouncedAmount] = useDebounce(amount, 500);

  const { data: hash, sendTransaction, isSuccess, error } = useSendTransaction();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendTransaction({
      to: debouncedAddress as `0x${string}`,
      value: parseEther(debouncedAmount)
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black w-1/2 mx-auto">
        <input
          value={address}
          placeholder="Receiving Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          value={amount}
          placeholder="Amount of ETH"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          disabled={!address || !amount}
          type="submit"
          className="mx-auto bg-[#a799ff] hover:bg-blue-600 w-1/2 text-white font-bold py-2 px-4 rounded"
        >
          Send Transaction
        </button>
      </form>
      {hash && <div>Transaction Hash: {hash}</div>}
      {error && (
        <div>
          An error occurred preparing the transaction: {error.message}
        </div>
      )}
    </div>
  );
};

export default SendTransaction;
