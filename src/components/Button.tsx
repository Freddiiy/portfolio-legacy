import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
} from "react";

export interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "1" | "2" | "4" | "8" | "12" | "16" | "20" | "24" | "28";
  type?: "button" | "submit" | "reset";
  color: "purple" | "blue" | "emerald";
  value?:
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  children?: ReactNode;
}

const colors = {
  purple:
    "text-white text-lg border-2 border-purple-500 bg-purple-500 hover:text-purple-500 hover:bg-transparent",
  blue: "text-white text-lg border-2 border-blue-500 bg-blue-500 hover:text-blue-500 hover:bg-transparent",
  emerald:
    "text-white text-lg border-2 border-emerald-500 bg-emerald-500 hover:text-emerald-500 hover:bg-transparent",
};

export default function Button(props: ButtonOptions) {
  let buttonClasses = colors[props.color] ?? colors["purple"];

  return (
    <button
      className={`${buttonClasses} w-full sm:w-auto mx-6 sm:mx-0 rounded-md transition-all duration-200 p-2 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
