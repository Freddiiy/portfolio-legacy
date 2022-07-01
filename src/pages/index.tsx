import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card/Card";
import {ReactElement, useEffect, useState} from "react";
import {FiArrowDown} from "react-icons/fi";
import {FaServer} from "react-icons/fa"
import {Icon} from "react-feather";

const Home: NextPage = () => {

	return (
		<>
			<Hero/>
			<Features/>
		</>
	)
}

function Hero() {
	return (
		<>
			<section className={"container h-screen flex w-full mx-auto px-4 justify-center items-center"}>
				<div className={"flex flex-col"}>
					<div className={"flex flex-col items-center justify-center"}>
						<h1 className={"px-2 mb-3 text-5xl font-bold leading-tight text-center sm:text-8xl"}>
							Hej, jeg er {" "}
							<br/>
							<div
								className={"inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"}>
								Frederik Galler
							</div>
						</h1>
						<p className={"text-center max-w-2xl mt-1 mb-8 text-xl lg:text-3xl leading-tight lg:leading-8 text-gray-400"}>
							Og jeg er full-stack webudvikler.
						</p>
					</div>
				</div>
					<div className={"absolute flex flex-col bottom-10"}>
						<p className={"mb-2 font-bold text-center"}>scroll</p>
						<FiArrowDown className={"w-8 h-8 animate-bounce"}/>
					</div>
			</section>
		</>
	)
}

function Features() {
	return (
		<>
			<section className="w-full bg-neutral-800 border border-gray-600 border-opacity-70">
				<div className={"flex flex-col md: flex-row justify-center max-w-lg"}>
					<FeatureCard icon={<FaServer className={"w-8 h-8"}/>} title={"Hosting & CI/CD"} text={"Jeg har prøvet flere forskellige " +
						"hosting-muligheder som Vercel, Heroku og Digital ocean. Derudover har jeg også siddet med " +
						"Linux-servere da jeg skulle bruge skræddersyet behov"} />
				</div>
			</section>
		</>
	)

	function FeatureCard({icon, title, text}: {icon: ReactElement, title: string, text: string}) {
		return (
			<>
				<div className={"flex flex-row m-16"}>
					<div className={"items-start"}>
						<div className={"bg-gradient-to-r from-blue-400 to-purple-600 p-5 rounded-xl"}>
							<span className={"w-24 h-26"}>{icon}</span>
						</div>
					</div>
					<div className={"ml-3"}>
						<h3 className={"font-bold text-xl text-white"}>{title}</h3>
						<p className={"text-gray-500"}>{text}</p>
					</div>
				</div>
			</>
		)
	}
}

function Languages() {
	return (
		<>
			<div className={"container flex flex-col w-full items-center mx-auto px-4"}>
				<div className={"my-4"}>
					<h2 className={"text-6xl font-bold"}>Jeg kan tilbyde</h2>
				</div>
				<div className={"grid md:grid-cols-3 gap-4 content-center"}>
					<Card title={"Python"} text={"Jeg har arbejdet med Python meget"}
						  element={<Image src={"/programminglang/python-logo.png"} layout={"fill"}/>}/>
					<Card title={"Java"} text={"Jeg har arbejdet med Python meget"}
						  element={<Image src={"/programminglang/python-logo.png"} layout={"fill"}/>}/>
				</div>
			</div>
		</>
	)
}

function TextSwitch() {
	const [display, setDisplay] = useState("");
	const [counter, setCounter] = useState(0);
	const texts = [
		"Og jeg er full-stack webudvikler.",
		"Og jeg skriver kode.",
		"Og min mor siger jeg er sød",
		"Og jeg er glad for software",
		"Og jeg er super sød"
	];
	useEffect(() => {
		setTimeout(() => {
			let randomCounter = Math.floor(Math.random() * 4);
			console.log(randomCounter)
			setCounter(randomCounter)
		}, 2000)
	})


	return (
		<>
			<p className={"text-center max-w-2xl mt-1 mb-8 text-xl lg:text-3xl leading-tight lg:leading-8 text-gray-400"}>
				{texts[counter]}
			</p>
		</>
	)
}

export default Home
