import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  constainerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
