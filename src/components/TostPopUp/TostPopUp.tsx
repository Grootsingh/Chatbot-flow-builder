import * as React from "react";

interface TostPopUpType {
  children: React.ReactNode;
  status: "success" | "error";
}

function TostPopUp({ children, status }: TostPopUpType) {
  return (
    <div
      className={`${
        status === "success" ? "bg-green-300" : "bg-red-300"
      } mx-auto z-[1] shrink-0 font-semibold text-sm h-8 grid place-content-center rounded-md px-2`}
    >
      <p>{children}</p>
    </div>
  );
}

export default TostPopUp;
