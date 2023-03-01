export interface IDataProps {
  data: {
    type: string;
    name: string;
    email: string;
    password: string;
    rePassword: string;
    bio: string;
    comp: string;
    education: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
}
