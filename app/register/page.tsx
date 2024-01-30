import RegisterDesktop from "@/components/Register/RegisterDesktop";
import RegisterMobile from "@/components/Register/RegisterMobile";
import React from "react";

function page() {
  return (
    <>
      <RegisterMobile />
      <RegisterDesktop />
    </>
  );
}

export default page;
