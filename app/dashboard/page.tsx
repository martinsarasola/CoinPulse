import React from "react";
import TableComponent from "@/app/dashboard/components/table";

const page = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center py-8 gap-8">
      <div className="flex flex-col w-10/12 items-center justify-center py-4 gap-8">
        <h1 className="text-3xl font-medium">
          Precios de criptomonedas por capitalización de mercado
        </h1>

        <div className="w-full">
          <TableComponent></TableComponent>
        </div>
      </div>
    </div>
  );
};

export default page;
