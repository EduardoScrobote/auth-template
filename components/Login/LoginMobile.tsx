import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Mobile() {
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <h1 className="mb-16 text-white text-4xl font-bold">Login</h1>
      <Input size="14rem" name="Usuario" />
      <Input size="14rem" name="Senha" />

      <div className="flex flex-row gap-4 mt-2">
        <div className="flex">
          <input type="checkbox" className="mr-1" />
          <p className="text-white text-sm">Salvar senha?</p>
        </div>
        <p className="text-white text-sm hover:cursor-pointer hover:text-cyan-300">
          Esqueceu sua senha?
        </p>
      </div>
      <Button size="14rem" name="Logar" />
      <p className="mt-4 text-white text-sm hover:text-cyan-300 hover:cursor-pointer">
        Esqueceu sua senha?
      </p>
    </div>
  );
}

export default Mobile;
