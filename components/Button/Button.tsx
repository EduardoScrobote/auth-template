import React from "react";

import { Button } from "./ButtonProp";

function Button({ size, name }: Button) {
  return (
    <div>
      <button
        className={`h-12 w-[${size}] font-semibold text-black mt-4 rounded-3xl bg-white hover:bg-purple-500 ease-out duration-300`}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
