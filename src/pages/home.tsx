import { cn } from "@lib";

const HomePage = () => {
  return (
    <div className={cn("flex flex-col items-center")}>
      <span
        className={cn(
          "lg:px-20 px-4 py-4",
          "rounded-lg",
          "bg-[--gray-4]",
          "shadow"
        )}
      >
        Hello, I'm and indie app developer based in Rome!
      </span>
    </div>
  );
};

export { HomePage };
