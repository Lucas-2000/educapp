import React from "react";
import { ITextAreaProps } from "../../interfaces/ITextareaProps";
import "./TextArea.css";

export const TextArea = ({
  label,
  name,
  placeholder,
  rows,
  cols,
  required,
  value,
  onChange,
}: ITextAreaProps) => {
  return (
    <div className="textarea-wrapper">
      <label className="label-textarea">{label}</label>
      <textarea
        className="textarea-form"
        required={required}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
