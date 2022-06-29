import {ReactNode} from "react";

export default function Header({children}: {children: ReactNode}) {
	return (
		<>
			<div className={"fixed transition-opacity z-40 w-full h-16 border-b bg-transparent border-transparent"}>

			</div>
				{children}
		</>
	)
}