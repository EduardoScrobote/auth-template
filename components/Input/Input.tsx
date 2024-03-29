import React from "react";

import { Input } from "./InputProps";

function Input({ size, name }: Input) {
  return (
    <div className="w-full flex items-center mt-4 justify-center">
      <div className="w-full justify-center items-center flex flex-col">
        <div>
          <p className="text-white text-lg mb-1 ml-2">{name}</p>
          <input
            type="text"
            className={`w-[${size}] h-12 outline-none bg-purple-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white border-2 border-white focus:border-purple-500 ease-out duration-500 p-4`}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
