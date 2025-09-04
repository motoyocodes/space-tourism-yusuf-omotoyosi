import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <>
      {/* 👇 This is where all the active page gets rendered */}
      <Outlet />
    </>
  );
}

export default App;
