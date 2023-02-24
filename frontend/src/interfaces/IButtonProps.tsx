import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  background: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
