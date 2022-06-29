import {ReactNode} from "react";
import Image from "next/image";

export default function Header({children}: {children: ReactNode}) {
	return (
		<>
			<div className={"fixed transition-opacity z-40 w-full h-16 border-b bg-transparent backdrop-blur"}>
				<div className={"container items-center justify-between"}>
					<div className={"rounded-full"}>
						<Image src={"/profile.png"} alt={""} layout={"fill"}/>
					</div>

				</div>
			</div>
			<main className={"pt-16"}>
				{children}
			</main>
		</>
	)
}