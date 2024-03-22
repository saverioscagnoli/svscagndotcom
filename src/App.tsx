import { Navbar } from "@components/navbar";
import { Space } from "@components/space";
import { cn } from "@lib";
import { NotFoundPage } from "@pages/404";
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <p className="text-[--slate-10] py-6 mt-auto">
        Made with ❤️ with React,{" "}
        <a
          href="https://tredici-www.vercel.app"
          target="_blank"
          className={cn(
            "text-[--slate-12]",
            "underline",
            "underline-offset-2",
            "cursor-pointer"
          )}
        >
          Tredici
        </a>{" "}
        and TailwindCSS.
      </p>
    </div>
  );
}

export default App;
