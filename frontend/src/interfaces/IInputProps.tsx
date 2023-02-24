export interface IInputProps {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
