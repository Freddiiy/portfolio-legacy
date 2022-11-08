import type {InferGetStaticPropsType, NextPage} from "next";
import Head from "next/head";
import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import {FiArrowDown} from "react-icons/fi";
import {
	FaServer,
	FaCode,
	FaDatabase,
	FaPython,
	FaJava,
	FaJsSquare,
	FaReact,
	FaDocker,
	FaGithub,
} from "react-icons/fa";
import {TbBrandNextjs, TbBrandSvelte} from "react-icons/tb";
import {SiTypescript} from "react-icons/si";
import Link from "next/link";
import Button from "../components/Button";
import indexLocale from "../locales/index.json";
import {handleLocaleMd, useLocale} from "../hooks/useLocale";
import ContactPage from "../features/Contact/ContactPage";
import headerLocale from "../locales/header.json";
import {GetStaticProps} from "next";
import SubText from "../components/SubText";
import Title from "../components/Title";
import AnimatedBackground from "../components/AnimatedBackground";
import {useScrollDistance} from "../hooks/useScrollDistance";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return handleLocaleMd("index", ctx);
};

const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Hero data={data}>
				<Features data={data}/>
				<Skills data={data}/>
				<ContactSection/>
			</Hero>
		</>
	);
};

function Hero({children, data}: { children: ReactNode, data: any }) {
	const scrollDistance = useScrollDistance();
	const parallax = scrollDistance * 0.25
	return (
		<>
			<section className={"overflow-hidden"}>
				<div
					className={
						"max-w-7xl mx-auto flex h-screen w-full px-4 justify-center items-center"
					}
				>
					<div className={"relative flex flex-col items-center justify-center"}>
						<h1 className={"mb-3 text-5xl font-bold text-center sm:text-8xl"} style={{
							transform: `translate3d(0px, -${parallax}px, 0px)`,
						}}>
							{data.title}
							<br/>
							<span
								className={
									"text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"
								}
							>
								Frederik Galler
							</span>
						</h1>
						<p
							className={
								"text-center max-w-2xl mt-1 mb-8 text-xl lg:text-3xl leading-tight lg:leading-8 text-gray-300"
							}
							style={{
								transform: `translate3d(0px, -${parallax}px, 0px)`,
							}}
						>
							{data.subtitle}
						</p>
						<AnimatedBackground />
					</div>
					<div className={"absolute flex flex-col bottom-10 z-10"}>
						<FiArrowDown className={"w-8 h-8 animate-bounce"}/>
					</div>
				</div>
				{children}
			</section>
		</>
	);
}

function Features({data}: { data: any }) {
	return (
		<>
			<div
				className={
					"max-w-7xl mx-auto grid justify-center lg:grid-cols-3 lg:max-w-7xl"
				}
			>
				<FeatureCard
					className={"emerald-to-blue"}
					icon={<FaCode className={"w-8 h-8"}/>}
					title={"Frontend"}
					text={data.features.frontend}
				/>
				<FeatureCard
					className={"blue-to-purple"}
					icon={<FaDatabase className={"w-8 h-8"}/>}
					title={"Backend"}
					text={data.features.backend}
				/>
				<FeatureCard
					className={"purple-to-emerald"}
					icon={<FaServer className={"w-8 h-8"}/>}
					title={"Hosting & CI/CD"}
					text={data.features.hosting}
				/>
			</div>
		</>
	);

	function FeatureCard({
							 icon,
							 title,
							 text,
							 className,
						 }: {
		icon: ReactElement;
		title: string;
		text: string;
		className: "blue-to-purple" | "emerald-to-blue" | "purple-to-emerald";
	}) {
		let twattr = "bg-gradient-to-r from-blue-400 to-purple-600";

		switch (className) {
			case "blue-to-purple": {
				twattr =
					"bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 to-purple-600";
				break;
			}
			case "emerald-to-blue": {
				twattr =
					"bg-gradient-to-b lg:bg-gradient-to-r from-green-500 to-blue-400";
				break;
			}
			case "purple-to-emerald": {
				twattr =
					"bg-gradient-to-b lg:bg-gradient-to-r from-purple-600 to-emerald-500";
				break;
			}
		}

		return (
			<>
				<div className={"flex flex-row m-6 lg:m-2"}>
					<div className={"items-start"}>
						<div className={`${twattr} p-5 rounded-xl`}>
							<span className={"w-24 h-26"}>{icon}</span>
						</div>
					</div>
					<div className={"ml-3"}>
						<h3 className={"font-bold text-xl text-white"}>{title}</h3>
						<SubText>{text}</SubText>
					</div>
				</div>
			</>
		);
	}
}

function Skills({data}: {data: any}) {
	return (
		<section className="max-w-7xl mx-auto mt-14 sm:mt-20 w-full px-2 mb-16">
			<Title text={data.dev}/>
			<div className="flex flex-row gap-10 justify-center mt-6 flex-wrap">
				<SkillsIcon element={<FaJsSquare/>} title={"JS"}/>
				<SkillsIcon element={<SiTypescript size={42}/>} title={"TS"}/>
				<SkillsIcon element={<FaReact/>} title={"React"}/>
				<SkillsIcon element={<FaPython/>} title={"Python"}/>
				<SkillsIcon element={<FaJava/>} title={"Java"}/>
				<SkillsIcon element={<TbBrandNextjs/>} title={"NextJS"}/>
				<SkillsIcon element={<TbBrandSvelte/>} title={"Svelte"}/>
				<SkillsIcon element={<FaDocker/>} title={"Docker"}/>
				<SkillsIcon element={<FaGithub/>} title={"GitHub"}/>
			</div>
		</section>
	);

	function SkillsIcon({element, title}: { element: ReactNode; title: string }) {
		return (
			<div className="flex flex-col justify-center text-center text-5xl">
					<span
						className="flex justify-center items-center text-center hover:scale-110 transition-all duration-100">
						{element}
					</span>
				<p className="text-xl">{title}</p>
			</div>
		);
	}
}

function ContactSection() {
	return (
		<section className="container mx-auto pb-16 px-2">
			<ContactPage/>
		</section>
	);
}

export default Home;
