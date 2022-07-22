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
          <label htmlFor={props.name} className="ml-2">
            {props.label}
          </label>
        )}
        <input
          className="text-white bg-black border-2 rounded-xl border-white"
          {...props}
        >
          {children}
        </input>
      </div>
    </>
  );
}
