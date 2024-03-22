import { cn } from "@lib";

const NotFoundPage = () => {
  return (
    <div
      className={cn("flex flex-col justify-center items-center", "-mt-[200px]")}
    >
      <img width={50} src="/qm.png" />
      <img width={150} src="/tn.png" className="rotate-12" />
      <h1 className={cn("font-bold text-4xl", "mt-4")}>404</h1>
      <p className={cn("mt-2", "text-xl")}>Where are you going?</p>
    </div>
  );
};

export { NotFoundPage };
