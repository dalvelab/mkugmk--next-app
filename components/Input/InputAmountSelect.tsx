interface IProps {
  label: string;
  amount: number;
  changeAmount: (type: string) => void;
}

export const InputAmountSelect: React.FC<IProps> = ({
  label,
  amount,
  changeAmount,
}) => {
  return (
    <div className="input__wrapper">
      <label className="label__tickets" htmlFor="text">
        {label}
      </label>
      <div className="tickets__amount--control">
        <button
          className="tickets__amount--button"
          onClick={() => changeAmount("decrease")}
        >
          <i className="fal fa-minus"></i>
        </button>
        <div className="tickets__amount--status">{amount}</div>
        <button
          className="tickets__amount--button"
          onClick={() => changeAmount("increase")}
        >
          <i className="fal fa-plus"></i>
        </button>
      </div>
    </div>
  );
};
