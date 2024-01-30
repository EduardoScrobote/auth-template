import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";

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
      <div className="flex justify-center items-center flex-col border-b border-white">
        <Button size="14rem" name="Logar" />
        <p className="mt-8 mb-8 text-white text-sm hover:cursor-default">
          Não possui uma conta?{" "}
          <a href="/register" className="hover:text-cyan-300">
            Registre-se!
          </a>
        </p>
      </div>
      <div className="flex mt-4 justify-center items-center">
        <IoLogoGoogleplus
          size={42}
          color="#e54533"
          style={{ cursor: "pointer", marginRight: "16px" }}
        />
        <FaFacebook
          size={36}
          color="#0866ff"
          style={{ cursor: "pointer", marginRight: "16px" }}
        />
        <FaGithub size={36} color="black" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Mobile;
