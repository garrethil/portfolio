import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
function App() {
  return (
    <>
      <div className="flex flex-col min-w-screen min-h-screen">
        <Header />
        <main className="flex bg-primary text-content-text">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
