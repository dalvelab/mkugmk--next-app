import { useDispatch, useSelector } from "react-redux";

// TYPES
import { FC } from "react";

// ACTIONS
import { UISidebarHandle } from "../redux/actions/uiActions";

interface RootState {
  UI: {
    sidebar: {
      isOpen: Boolean;
    };
  };
}

const Sidebar: FC = () => {
  const dispatch = useDispatch();

  const sidebar = useSelector((state: RootState) => state.UI.sidebar);

  const handleSidebar = () => {
    dispatch(UISidebarHandle(false));
  };

  return (
    <div className={sidebar.isOpen ? "sidebar sidebar--open" : "sidebar"}></div>
  );
};

export default Sidebar;
