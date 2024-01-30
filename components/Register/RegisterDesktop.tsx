"use client";
import useBreakPoint, { BreakPoint } from "@/hooks/usebreakingPoint";
import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Desktop() {
  if ([BreakPoint.DESKTOP].includes(useBreakPoint())) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-purple">
        <div className="w-[40%] h-[50rem] flex justify-center flex-col items-center bg-purple-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white border-2 border-white">
          <h1 className="mb-16 text-white text-4xl font-bold">Registre-se</h1>
          <Input size="24rem" name="Usuario" />
          <Input size="24rem" name="E-mail" />
          <Input size="24rem" name="Senha" />
          <div className="flex flex-col border-b border-white justify-center items-center mt-4">
            <Button size="16rem" name="Registrar" />
            <p className="mt-8 mb-4 hover:cursor-default">
              Já possui uma conta?{" "}
              <a href="/" className="hover:text-cyan-300">
                Faça login!
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
            <FaGithub size={36} color="#152d3c" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
