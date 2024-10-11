import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Hello World</h1>
      <Outlet />
    </>
  );
};

