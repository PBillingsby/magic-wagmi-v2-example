import { useState } from "react";
import { useSignMessage } from "wagmi";

const SignMessage = () => {
  const [message, setMessage] = useState("");
  const { data, isError, isSuccess, signMessage } = useSignMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signMessage({ message: message });
    setMessage("");
  };

  return (
    <div>
      <form className="flex flex-col gap-2 w-1/2 mx-auto" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
        />
        <button
          className="mx-auto bg-[#a799ff] hover:bg-blue-600 w-1/2 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign message
        </button>
      </form>
      {isSuccess && <div className="message-status">Signature: {data}</div>}
      {isError && <div className="message-status">Error signing message</div>}
    </div>
  );
};

export default SignMessage;
