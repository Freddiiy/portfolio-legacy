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

export const getStaticProps: GetStaticProps = async (ctx) => {
	return handleLocaleMd("index", ctx);
};

const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Hero />
			<Features />
			<Skills />
			<ContactSection />
		</>
	);

	function Hero() {
		return (
			<>
				<section className={"overflow-hidden"}>
					<div
						className={
							"max-w-7xl mx-auto flex h-screen w-full px-4 justify-center items-center"
						}
					>
						<div className={"flex flex-col items-center justify-center"}>
							<h1 className={"mb-3 text-5xl font-bold text-center sm:text-8xl"}>
								{data.title}
								<br />
								<div
									className={
										"inline text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"
									}
								>
									Frederik Galler
								</div>
							</h1>
							<p
								className={
									"text-center max-w-2xl mt-1 mb-8 text-xl lg:text-3xl leading-tight lg:leading-8 text-gray-300"
								}
							>
								{data.subtitle}
							</p>
							<div className={"relative w-full h-full -z-10"}>
								<div
									className={
										"absolute -top-60 -right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob2 animate-delay-2s"
									}
								/>
								<div
									className={
										"absolute -top-80 -right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-delay-4s"
									}
								/>
								<div
									className={
										"absolute -top-72 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob2"
									}
								/>
								<div
									className={
										"absolute -top-96 -left-8 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-delay-6s"
									}
								/>
							</div>
						</div>
						<div className={"absolute flex flex-col bottom-10 z-10"}>
							<FiArrowDown className={"w-8 h-8 animate-bounce"} />
						</div>
					</div>
				</section>
			</>
		);
	}

	function Features() {
		return (
			<>
				<div
					className={
						"max-w-7xl mx-auto grid justify-center lg:grid-cols-3 lg:max-w-7xl"
					}
				>
					<FeatureCard
						className={"emerald-to-blue"}
						icon={<FaCode className={"w-8 h-8"} />}
						title={"Frontend"}
						text={data.features.frontend}
					/>
					<FeatureCard
						className={"blue-to-purple"}
						icon={<FaDatabase className={"w-8 h-8"} />}
						title={"Backend"}
						text={data.features.backend}
					/>
					<FeatureCard
						className={"purple-to-emerald"}
						icon={<FaServer className={"w-8 h-8"} />}
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

	function Skills() {
		return (
			<section className="max-w-7xl mx-auto mt-10 sm:mt-20 w-full px-2 mb-16">
				<Title text={data.dev}/>
				<div className="flex flex-row gap-10 justify-center mt-6 flex-wrap">
					<SkillsIcon element={<FaJsSquare />} title={"JS"} />
					<SkillsIcon element={<SiTypescript size={42} />} title={"TS"} />
					<SkillsIcon element={<FaReact />} title={"React"} />
					<SkillsIcon element={<FaPython />} title={"Python"} />
					<SkillsIcon element={<FaJava />} title={"Java"} />
					<SkillsIcon element={<TbBrandNextjs />} title={"NextJS"} />
					<SkillsIcon element={<TbBrandSvelte />} title={"Svelte"} />
					<SkillsIcon element={<FaDocker />} title={"Docker"} />
					<SkillsIcon element={<FaGithub />} title={"GitHub"} />
				</div>
			</section>
		);

		function SkillsIcon({element, title}: {element: ReactNode; title: string}) {
			return (
				<div className="flex flex-col justify-center text-center text-5xl">
					<span className="flex justify-center items-center text-center hover:scale-110 transition-all duration-100">
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
				<ContactPage />
			</section>
		);
	}
};

export default Home;
