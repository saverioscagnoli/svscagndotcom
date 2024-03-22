import { Navbar } from "@components/navbar";
import { Space } from "@components/space";
import { cn } from "@lib";
import { HomePage } from "@pages/home";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className={cn("w-screen h-screen flex flex-col items-center")}>
      <Navbar />
      <Space />
      <div className={cn("xl:px-96 lg:px-32 px-6")}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
