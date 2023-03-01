export interface IInputProps {
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
