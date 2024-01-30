import RegisterDesktop from "@/components/Register/RegisterDesktop";
import RegisterMobile from "@/components/Register/RegisterMobile";
import React from "react";

function page() {
  return (
    <div className="w-full ">
      <RegisterMobile />
      <RegisterDesktop />
    </div>
  );
}

export default page;
