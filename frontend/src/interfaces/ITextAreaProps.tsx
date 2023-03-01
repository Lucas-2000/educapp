import { ReactNode } from "react";

export interface ITextAreaProps {
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
  rows: number;
  cols: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
