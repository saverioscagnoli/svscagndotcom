import { Navbar } from "@components/navbar";
import { Space } from "@components/space";
import { cn } from "@lib";
import { AboutPage } from "@pages/about";
import { ProjectsPage } from "@pages/projects";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div
      className={cn("max-w-full h-screen min-h-0 flex flex-col items-center")}
    >
      <Navbar />
      <Space />

      <div className="z-10">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>

      <p className="text-[--slate-10] py-6 mt-auto">
        © {new Date().getFullYear()} Saverio Scagnoli. All Rights Reserved.
      </p>
    </div>
  );
}

export default App;
