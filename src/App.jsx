import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex bg-content text-content-text">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
