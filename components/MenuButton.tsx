import { useDispatch } from "react-redux";

// TYPES
import { FC } from "react";

// ACTIONS
import { UISidebarHandle } from "../redux/actions/uiActions";

interface RootState {
  UI: {
    sidebar: string;
  };
}

const Navbar: FC = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(UISidebarHandle(true));
  };

  return (
    <button className="button__sidebar--open" onClick={handleSidebar}>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default Navbar;
