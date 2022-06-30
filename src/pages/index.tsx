import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

	return (
		<Landing/>
	)

	function Landing() {
		return (
			<>
				<div className={"container mx-auto px-4 w-full pt-32 items-center justify-center"}>
					<div className={"w-screen"}>
					</div>
					<div className={"grid grid-cols-1 sm:grid-cols-2"}>
						<div className={"flex flex-col items-center justify-center"}>
							<h1 className={"px-2 mb-3 text-4xl font-bold leading-tight text-center sm:text-6xl"}>
								Hej, mit navn er {" "}
								<br/>
								<div
									className={"inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"}>
									Frederik Galler
								</div>
							</h1>
							<p className={"text-center max-w-2xl mt-1 mb-8 text-xl lg:text-2xl leading-tight lg:leading-8 text-gray-400"}>
								og jeg er softwareudvikler med stor passion.
							</p>
						</div>
						<div className={"flex items-center justify-center"}>
							<div className={"relative w-96 h-96"}>
								<Image src={"/me-with-cat.png"} alt={"Me with my cute cat Poul"} layout={"fill"}
									   className={"rounded-2xl"}/>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Home
