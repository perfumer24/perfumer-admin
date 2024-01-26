// import { ErrorComponent } from "@/utils/ErrorComponent";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  console.log("Wrapper");

  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
