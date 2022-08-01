import type { FC } from "react";
import React from "react";

export enum ButtonVariant {
  outlined = "outlined",
  primary = "primary",
  whitePrimary = "white-primary",
  whiteOutlined = "white-outlined",
}

interface Props {
  children: React.ReactNode;
  variant: ButtonVariant;
}

export const Button: FC<Props> = ({ children, variant = "primary" }) => {
  return (
    <div
      className={`container cursor-pointer w-fit flex justify-center items-center rounded-3xl text-white min-w-[8rem] px-8 py-0 transition hover:opacity-80 ${
        (variant === ButtonVariant.primary && "bg-button-primary") ||
        (variant === ButtonVariant.outlined &&
          "border border-button-primary text-button-primary") ||
        (variant === ButtonVariant.whitePrimary && "bg-white") ||
        (variant === ButtonVariant.whiteOutlined &&
          "border border-white text-white bg-transparent")
      }`}
    >
      <button className={`flex gap-2 m-0 py-2`}>{children}</button>
    </div>
  );
};
