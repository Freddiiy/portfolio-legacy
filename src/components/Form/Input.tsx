import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
}

export default function Input(
	props: InputProps,
	{children}: {children: ReactNode}
) {
	return (
		<>
			<div className="flex flex-col">
				{props.label && (
					<label
						htmlFor={props.name}
						className="block text-md font-medium text-neutral-400"
					>
						{props.label}
					</label>
				)}
				<input
					className={`mt-2 border h-10 border-neutral-500 outline-none focus:border-purple-400 block w-full shadow-sm sm:text-sm px-4 py-1 rounded-md bg-black transition-all duration-200 font-bold ${
						props.className
					}`}
					{...props}
				>
					{children}
				</input>
			</div>
		</>
	);
}
