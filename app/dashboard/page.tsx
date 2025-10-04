"use client";
import React from "react";
import TableComponent from "@/app/dashboard/components/table";
import DashboardTitle from "./components/dashboardtitle";

const page = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center py-8 gap-8">
      <div className="flex flex-col w-10/12 items-center justify-center py-4 gap-8">
        <DashboardTitle />
        <div className="w-full">
          <TableComponent></TableComponent>
        </div>
      </div>
    </div>
  );
};

export default page;
