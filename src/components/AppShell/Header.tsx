import {ReactNode} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({children}: {children: ReactNode}) {
	return (
		<>
			<div className={"fixed transition-opacity z-40 w-full h-16 border-b bg-transparent backdrop-blur"}>
				<div className={"relative flex items-center h-full px-5 m-auto sm:container"}>
					<Link href={"/"} >
						<div className={"absolute flex flex-row items-center"}>
							<div className={"relative w-12 h-12 mr-3"}>
								<Image src={"/profile.png"} alt={""} layout={"fill"}/>
							</div>
							<h3 className={"text-xl font-bold"}>Frederik</h3>
						</div>
					</Link>

				</div>
			</div>
			<main className={"pt-16"}>
				{children}
			</main>
		</>
	)
}