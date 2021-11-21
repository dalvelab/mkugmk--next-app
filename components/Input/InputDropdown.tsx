interface IProps {
  isOpened: boolean;
  setOpened: Function;
  selectItem: Function;
  label: string;
  placeholder: string;
  items: Array<IDropdownItem>;
  text: string;
}

interface IDropdownItem {
  id: string;
  title: string;
}

export const InputDropdown = (props: IProps) => {
  const { isOpened, setOpened, selectItem, label, placeholder, items, text } =
    props;
  const handleDropdown = () => {
    setOpened(!isOpened);
  };

  const handleItemSelect = (item: IDropdownItem) => {
    selectItem(item);
    setOpened(false);
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
          isOpened ? "dropdown__icon icon--reversed" : "dropdown__icon"
        }
        onClick={handleDropdown}
      >
        <i className="far fa-chevron-down"></i>
      </button>
      <div className={isOpened ? "dropdown dropdown--active" : "dropdown"}>
        {items.map((item, index) => (
          <div
            key={index}
            className="dropdown__element"
            onClick={() => handleItemSelect(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
