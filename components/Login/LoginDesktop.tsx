import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";

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
      <div className="flex flex-col justify-center items-center border-b border-white">
        <Button size="24rem" name="Logar" />
        <p className="mt-8 mb-8 hover:cursor-default">
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
        <FaGithub
          onClick={() => window.open("https://github.com/EduardoScrobote")}
          size={36}
          color="black"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default LoginDesktop;
