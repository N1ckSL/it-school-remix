import React from "react";

interface Props {
  children: React.ReactNode;
}

export const LinkButton: React.FC<Props> = ({ children }) => {
  return (
    <div className="container cursor-pointer w-fit flex justify-center items-center underline underline-offset-4 text-white min-w-[8rem] px-6 transition hover:opacity-80">
      <button className={"block m-0 "}>{children}</button>
    </div>
  );
};
