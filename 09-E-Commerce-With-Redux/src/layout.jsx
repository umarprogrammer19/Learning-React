import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex gap-2">
        <Link to={"/"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <Outlet />
    </>
  );
};

