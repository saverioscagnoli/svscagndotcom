import { Navbar } from "@components/navbar";
import { Space } from "@components/space";
import { cn } from "@lib";
import { AboutPage } from "@pages/about";
import { ProjectsPage } from "@pages/projects";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className={cn("max-w-full h-screen flex flex-col items-center")}>
      <Navbar />
      <Space />

      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projects" element={<Navigate to="/" />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <p className="text-[--slate-10] py-6">
        © {new Date().getFullYear()} Saverio Scagnoli. All Rights Reserved.
      </p>
    </div>
  );
}

export default App;
