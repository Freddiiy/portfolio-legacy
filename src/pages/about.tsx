import {NextPage} from "next";

const About: NextPage = () => {
	return (
		<>
			<div className={"bg-gray-50 min-h-screen flex items-center justify-center px-16"}>
				<div className={"w-screen"}>
					<div className={"relative max-w-full sm:w-full mx-auto"}>
						<div className={"absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"}/>
					</div>
				</div>
			</div>
		</>
	)
}

export default About