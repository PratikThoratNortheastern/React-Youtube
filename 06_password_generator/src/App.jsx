import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isDark, setIsDark] = useState(false);

  const inputRef = useRef(null);
  const copyPassword = useCallback(() => {
    window.navigator.clipboard
      .writeText(password)
      .then(() => {
        inputRef.current?.select();
      })
      .catch((error) => {
        console.error("Cannot Copy Password", error);
      });
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$*%^&-_+=[]{}~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div
      className={`min-h-screen overflow-hidden flex flex-col items-center justify-center transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Theme toggle button */}
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className={`fixed top-4 right-4 shadow-md px-4 py-2 mb-6 rounded-lg duration-200 ${
          isDark
            ? "bg-black text-white hover:bg-gray-600"
            : "bg-blue-700 text-white hover:bg-blue-900"
        }`}
      >
        {isDark ? "Light" : "Dark"}
      </button>

      {/* Card */}
      <div
        className={`w-full max-w-md shadow-md rounded-lg px-4 py-3 transition-colors duration-300 ${
          isDark ? "bg-gray-800 text-orange-400" : "bg-white text-orange-700"
        }`}
      >
        <h1 className="text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={inputRef}
            type="text"
            value={password}
            className="outline-none py-1 px-3 w-full bg-white text-black"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="cursor-pointer outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {/* Length slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>length: {length}</label>
          </div>

          {/* Number checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="cursor-pointer w-4 h-4"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Characters checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charactersAllowed}
              id="characterInput"
              onChange={() => setCharactersAllowed((prev) => !prev)}
              className="cursor-pointer w-4 h-4"
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
