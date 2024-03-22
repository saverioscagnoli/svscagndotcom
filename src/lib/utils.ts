import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

export { cn, capitalize, lerp };
