// TYPES
import { DropdownProps } from "@models/main";

const Dropdown: React.FC<DropdownProps> = ({
  isActive,
  setActive,
  label,
  text,
  placeholder,
  setText,
  setPrice,
  setID,
  tickets,
}) => {
  const handleDropdown = () => {
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const handleDropdownSelect = (id: number, text: string, price: number) => {
    setText(text);
    setPrice(price);
    setID(id);
    setActive(false);
  };

  return (
    <div className="input__wrapper input__wrapper--dropdown">
      <label className="label__tickets" htmlFor="text">
        {label}
      </label>
      <input
        className="input__tickets"
        type="text"
        placeholder={placeholder}
        value={text}
        readOnly
        onClick={handleDropdown}
      />
      <button
        className={
          isActive ? "dropdown__icon icon--reversed" : "dropdown__icon"
        }
        onClick={handleDropdown}
      >
        <i className="far fa-chevron-down"></i>
      </button>
      <div className={isActive ? "dropdown dropdown--active" : "dropdown"}>
        {tickets.map((price, index) => (
          <div
            key={index}
            className="dropdown__element"
            onClick={() =>
              handleDropdownSelect(price.id, price.title, price.price)
            }
          >
            {price.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
