// TYPES
import { FC } from "react";

interface DropdownProps {
  isActive: boolean;
  setActive: Function;
  label: string;
  text: string;
  placeholder: string;
  setText: Function;
  setPrice: Function;
  setID: Function;
}

const Dropdown: FC<DropdownProps> = ({
  isActive,
  setActive,
  label,
  text,
  placeholder,
  setText,
  setPrice,
  setID,
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

  const hardData = [
    {
      id: 1,
      title: "Билет в 1 ВЦ (стандарт)",
      price: 300,
    },
    {
      id: 2,
      title: "Билет в 2 ВЦ (стандарт)",
      price: 550,
    },
    {
      id: 3,
      title: "Билет в 3 ВЦ (стандарт)",
      price: 800,
    },
    {
      id: 4,
      title: "Билет в 4 ВЦ (стандарт)",
      price: 1000,
    },
    {
      id: 5,
      title: "Билет в 1 ВЦ (льготный)",
      price: 100,
    },
    {
      id: 6,
      title: "Билет в 2 ВЦ (льготный)",
      price: 180,
    },
    {
      id: 7,
      title: "Билет в 3 ВЦ (льготный)",
      price: 250,
    },
    {
      id: 8,
      title: "Билет в 4 ВЦ (льготный)",
      price: 300,
    },
  ];

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
        {hardData.map((data) => (
          <div
            key={data.id}
            className="dropdown__element"
            onClick={() =>
              handleDropdownSelect(data.id, data.title, data.price)
            }
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
