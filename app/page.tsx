"use client";
import LoginDesktop from "@/components/Login/LoginDesktop";
import Mobile from "@/components/Login/LoginMobile";
import Desktop from "@/components/Register/RegisterDesktop";
import useBreakPoint, { BreakPoint } from "@/hooks/usebreakingPoint";
import Image from "next/image";

export default function Home() {
  if ([BreakPoint.MOBILE, BreakPoint.TABLET].includes(useBreakPoint())) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-purple">
        <Mobile />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-purple">
      <LoginDesktop />
    </div>
  );
}
