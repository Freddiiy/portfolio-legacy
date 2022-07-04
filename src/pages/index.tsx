import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card/Card";
import React, {ReactElement, useEffect, useState} from "react";
import {FiArrowDown} from "react-icons/fi";
import {FaServer, FaCode, FaDatabase} from "react-icons/fa"
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
			<section className={"overflow-hidden"}>
				<div className={"container flex h-screen w-full mx-auto px-4 justify-center items-center"}>
					<div className={"flex flex-col items-center justify-center"}>
						<h1 className={"mb-3 text-5xl font-bold text-center sm:text-8xl"}>
							Hej, jeg er {" "}
							<br/>
							<div
								className={"inline text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"}>
								Frederik Galler
							</div>
						</h1>
						<p className={"text-center max-w-2xl mt-1 mb-8 text-xl lg:text-3xl leading-tight lg:leading-8 text-gray-300"}>
							Og jeg er full-stack webudvikler.
						</p>
						<div className={"relative w-full h-full -z-10"}>
							<div className={"absolute -top-60 -right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob2 animate-delay-2s"}/>
							<div className={"absolute -top-80 -right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-delay-4s"}/>
							<div className={"absolute -top-72 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob2"}/>
							<div className={"absolute -top-96 -left-8 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-delay-6s"}/>
						</div>
					</div>
					<div className={"absolute flex flex-col bottom-10 z-10"}>
						<FiArrowDown className={"w-8 h-8 animate-bounce"}/>
					</div>
				</div>
			</section>
		</>
	)
}

function Features() {
	return (
		<>
				<div className={"container mx-auto flex grid lg:grid-cols-3 justify-center"}>
					<FeatureCard className={"emerald-to-blue"} icon={<FaCode className={"w-8 h-8"}/>} title={"Frontend"}
								 text={"Jeg hører helt klart hjemme i React økosystemet. Det passer perfekt til min tankegang og arbejdsprocess. Jeg bruger for det meste frameworkene \"Next js\" og \"Remix\""}/>
					<FeatureCard className={"blue-to-purple"} icon={<FaDatabase className={"w-8 h-8"}/>} title={"Backend"}
								 text={"Jeg fungerer også godt i et backend team. Jeg kan skrive Python (Django og FastApi), Javascript/Typescript og jeg har brugt Java (Spring) på min uddannelse til samtlige opgaver. Og jeg også lidt SQL"}/>
					<FeatureCard className={"purple-to-emerald"} icon={<FaServer className={"w-8 h-8"}/>} title={"Hosting & CI/CD"}
								 text={"Jeg har hosted hos Vercel, Heroku og DigitalOcean VPS. Har også lavet egen CI/CD pipeline til få projekter"}/>
				</div>
		</>
	)

	function FeatureCard({icon, title, text, className}: { icon: ReactElement, title: string, text: string, className: "blue-to-purple" | "emerald-to-blue" | "purple-to-emerald"}) {

		let twattr = "bg-gradient-to-r from-blue-400 to-purple-600"

		switch (className) {
			case "blue-to-purple": {
				twattr = "bg-gradient-to-r from-blue-400 to-purple-600";
				break;
			}
			case "emerald-to-blue": {
				twattr = "bg-gradient-to-r from-green-500 to-blue-400";
				break;
			}
			case "purple-to-emerald": {
				twattr = "bg-gradient-to-r from-purple-600 to-emerald-500"
				break;
			}
		}

		return (
			<>
				<div className={"flex flex-row m-8 lg:m-16"}>
					<div className={"items-start"}>
						<div className={`${twattr} p-5 rounded-xl`}>
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

export default Home
