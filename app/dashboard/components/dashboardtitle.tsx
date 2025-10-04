import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const DashboardTitle = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <h1 className={`${isMobile ? "text-xl" : "text-3xl"} font-medium`}>
      Precios de criptomonedas por capitalización de mercado
    </h1>
  );
};

export default DashboardTitle;
