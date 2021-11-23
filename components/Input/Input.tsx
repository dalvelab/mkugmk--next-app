interface IProps {
  label: string;
  type: string;
  placeholder: string;
}

export const Input: React.FC<IProps> = ({ label, type, placeholder }) => {
  return (
    <div className="input__wrapper">
      <label htmlFor="text">{label}</label>
      <input className="input__tickets" type={type} placeholder={placeholder} />
    </div>
  );
};
