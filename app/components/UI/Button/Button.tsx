import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <div className="container cursor-pointer w-fit flex justify-center items-center rounded-3xl text-white min-w-[8rem] bg-button-primary px-8 py-0 transition hover:opacity-80">
      <button className={"block m-0 py-2"}>{children}</button>
    </div>
  );
};
