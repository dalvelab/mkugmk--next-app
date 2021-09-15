// TYPES
import { InputProps } from "@models/main";

const Input: React.FC<InputProps> = ({ label, type, placeholder }) => {
  return (
    <div className="input__wrapper">
      <label htmlFor="text">{label}</label>
      <input className="input__tickets" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
