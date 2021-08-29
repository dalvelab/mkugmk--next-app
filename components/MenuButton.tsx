import { useDispatch, useSelector } from "react-redux";

// TYPES
import { FC } from "react";

// ACTIONS
import { UISidebarHandle } from "../redux/actions/uiActions";

interface RootState {
  UI: {
    sidebar: {
      isOpen: boolean;
    };
  };
}

const MenuButton: FC = () => {
  const dispatch = useDispatch();

  const sidebar = useSelector((state: RootState) => state.UI.sidebar);

  const handleSidebar = () => {
    dispatch(UISidebarHandle(sidebar.isOpen ? false : true));
  };

  return (
    <button
      className={
        sidebar.isOpen
          ? "button__sidebar--open button-sidebar--active"
          : "button__sidebar--open"
      }
      onClick={handleSidebar}
    >
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default MenuButton;
