const Input = ({
  placeholder,
  button,
  onClick,
  value,
  setValue,
  clear,
  thick,
}) => {
  const handleClear = () => {
    setValue("");
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <div className="justify-center flex items-center w-full">
      <div
        className={`flex rounded-full w-full ${
          thick ? "p-2 px-3" : "p-1"
        } items-center bg-rtools-blue-300`}
      >
        <input
          className="w-full placeholder:text-rtools-blue-100 text-white focus:outline-none bg-transparent px-3"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        <button
          className={`rounded-full text-rtools-blue-400 ${
            thick && "p-2"
          } px-4 bg-rtools-green`}
          onClick={onClick}
        >
          {button}
        </button>
      </div>
      {clear && (
        <button onClick={handleClear} className="px-3">
          clear
        </button>
      )}
    </div>
  );
};

export default Input;
