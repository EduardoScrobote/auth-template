"use client";
import useBreakPoint, { BreakPoint } from "@/hooks/usebreakingPoint";
import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";

function RegisterMobile() {
  if ([BreakPoint.MOBILE, BreakPoint.TABLET].includes(useBreakPoint())) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-purple">
        <div className="w-full h-screen flex justify-center flex-col items-center">
          <h1 className="mb-16 text-white text-4xl font-bold">Registre-se</h1>
          <Input size="14rem" name="Usuario" />
          <Input size="14rem" name="E-mail" />
          <Input size="14rem" name="Senha" />
          <div className="mt-4 w-[16rem] border-b border-white flex justify-center flex-col items-center">
            <Button size="14rem" name="Registrar" />
            <p className="mt-4 text-white mb-8 text-sm hover:cursor-pointer">
              Já possui uma conta?{" "}
              <a href="/" className="hover:text-cyan-300">
                faça login!
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
      </div>
    );
  }
}

export default RegisterMobile;
