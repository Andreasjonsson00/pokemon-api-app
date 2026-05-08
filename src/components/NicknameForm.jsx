import { useState } from "react";

const NicknameForm = ({
  label,
  submitLabel,
  onSubmit,
}) => {
  const [nickname, setNickname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(nickname.trim());
    setNickname("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-3 w-full">
      <label className="text-sm font-semibold" htmlFor={label}>
      </label>
      <input
        id={label}
        type="text"
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
        placeholder="Enter nickname"
        className="text-xs border rounded px-3 py-2 text-center"
      />
      <button
        type="submit"
        className="text-xs bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-150 cursor-pointer"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default NicknameForm;
