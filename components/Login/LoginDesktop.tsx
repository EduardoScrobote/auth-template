import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginDesktop() {
  return (
    <div className="w-[40%] h-[50rem] flex justify-center flex-col items-center bg-purple-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white border-2 border-white">
      <h1 className="mb-16 text-white text-4xl font-bold">Login</h1>
      <Input size="24rem" name="Usuario" />
      <Input size="24rem" name="Senha" />

      <div className="flex flex-row gap-24 mt-2">
        <div className="flex">
          <input type="checkbox" className="mr-1" />
          <p className="text-white text-md">Salvar senha?</p>
        </div>
        <p className="text-white text-md hover:cursor-pointer hover:text-cyan-300">
          Esqueceu sua senha?
        </p>
      </div>
      <Button size="24rem" name="Logar" />
      <p className="mt-4 text-white text-md hover:text-cyan-300 hover:cursor-pointer">
        Esqueceu sua senha?
      </p>
    </div>
  );
}

export default LoginDesktop;
