import {ReactNode} from "react";

export default function Header({children}: {children: ReactNode}) {
	return (
		<>
			<div className={"fixed transition-opacity z-40 w-full h-16 border-b bg-white border-2 backdrop-blur"}>

			</div>
			<main className={"pt-16"}>
				{children}
			</main>
		</>
	)
}