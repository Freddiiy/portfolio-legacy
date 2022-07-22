import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export default function Input(
  props: InputProps,
  { children }: { children: ReactNode }
) {
  return (
    <>
      <div className="flex flex-col">
        {props.label && (
          <label
            htmlFor={props.name}
            className="block text-md font-medium text-white"
          >
            {props.label}
          </label>
        )}
        <input
          className={`mt-2 border-2 border-white focus:outline-none focus:border-purple-400 focus:border-2 block w-full shadow-sm sm:text-sm px-4 py-1 rounded-xl bg-black transition-all duration-150 ${props.className}`}
          {...props}
        >
          {children}
        </input>
      </div>
    </>
  );
}
