import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

const Sidebar = () => {
  const { setLoggedInUser } = useContext(GlobalContext);

  return (
    <div>
      <h1 className="h-16 border-b-2 font-bold text-center">St Peters UMC</h1>
      <ul>
        <Link to={"/"}>
          <li>Dashboard</li>
        </Link>
        <Link to={"/members"}>
          <li>Members</li>
        </Link>
        <Link to={"/finance"}>
          <li>Finance</li>
        </Link>
        <Link to={"/events"}>
          <li>Events</li>
        </Link>
        <Link to={"/history"}>
          <li>History</li>
        </Link>
        <Link to={"/settings"}>
          <li>Settings</li>
        </Link>
        <Link to={"/login"} onClick={setLoggedInUser("")}>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
