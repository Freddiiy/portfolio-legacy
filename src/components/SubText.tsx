import {ReactNode} from "react";

const SubText = ({children}: { children: ReactNode }) => {
	return (
		<p className={"text-neutral-400 text-xl font-normal"}>
			{children}
		</p>
	)
}

export default SubText