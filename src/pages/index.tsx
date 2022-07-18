import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card/Card";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
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
import { TbBrandNextjs, TbBrandSvelte } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Skills />
      <AboutMe />
    </>
  );
};

function Hero() {
  return (
    <>
      <section className={"overflow-hidden"}>
        <div
          className={
            "container flex h-screen w-full mx-auto px-4 justify-center items-center"
          }
        >
          <div className={"flex flex-col items-center justify-center"}>
            <h1 className={"mb-3 text-5xl font-bold text-center sm:text-8xl"}>
              Hej, jeg er <br />
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
              Og jeg er full-stack webudvikler.
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
          "container mx-auto grid justify-center lg:grid-cols-3 lg:max-w-7xl"
        }
      >
        <FeatureCard
          className={"emerald-to-blue"}
          icon={<FaCode className={"w-8 h-8"} />}
          title={"Frontend"}
          text={
            'Jeg hører helt klart hjemme i React økosystemet. Det passer perfekt til min tankegang og arbejdsprocess. Jeg bruger for det meste frameworkene "Next js" og "Remix"'
          }
        />
        <FeatureCard
          className={"blue-to-purple"}
          icon={<FaDatabase className={"w-8 h-8"} />}
          title={"Backend"}
          text={
            "Jeg fungerer også godt i et backend team. Jeg kan skrive Python (Django og FastApi), Javascript/Typescript og jeg har brugt Java (Spring) på min uddannelse til samtlige opgaver. Og jeg også lidt SQL"
          }
        />
        <FeatureCard
          className={"purple-to-emerald"}
          icon={<FaServer className={"w-8 h-8"} />}
          title={"Hosting & CI/CD"}
          text={
            "Jeg har hosted hos Vercel, Heroku og DigitalOcean VPS. Har også lavet egen CI/CD pipeline til få projekter"
          }
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
            <p className={"text-gray-400"}>{text}</p>
          </div>
        </div>
      </>
    );
  }
}

function Skills() {
  return (
    <section className="container mx-auto mt-20 w-full max-w-7xl">
      <h3 className="text-center text-white text-xl md:text-2xl font-bold mb-4">
        Hvad jeg bruger mest til udvikling
      </h3>
      <div className="flex flex-row gap-10 justify-center m-6 flex-wrap">
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
      <div className="flex justify-center">
        <Link href={"/resume"}>
          <button className="text-purple-400 text-xl font-bold">
            Se mit resume for mere info
          </button>
        </Link>
      </div>
    </section>
  );

  function SkillsIcon({
    element,
    title,
  }: {
    element: ReactNode;
    title: string;
  }) {
    return (
      <div className="flex flex-col justify-center text-center text-5xl">
        <div className="items-start">
          <span className="justify-center items-center">{element}</span>
        </div>
        <p className="text-xl">{title}</p>
      </div>
    );
  }

  function SkillsIconSmall({
    element,
    title,
  }: {
    element: ReactNode;
    title: string;
  }) {
    return (
      <div className="flex flex-col justify-center text-center text-2xl">
        <div className="items-start">
          <span className="justify-center items-center">{element}</span>
        </div>
        <p className="text-lg">{title}</p>
      </div>
    );
  }
}

function AboutMe() {
  return (
    <section className="container mx-auto mt-20 w-full max-w-7xl">
      <div className="flex flex-col lg:flex-row m-6 ">
        <div className="col-span-4 row-span-3">
          <h3 className="mb-4 text-center text-3xl md:text-4xl font-bold">
            Om mig og mig selv
          </h3>
          <p className="text-gray-400">
            Jeg er udvikler og bosat i København. Jeg har stor passion for mit
            håndværk.
            <br />
            I 2011 opdagede jeg at man kunne programmere mods til Minecraft.
            Ligesiden har jeg været hooked på software. Dog lige siden jeg var
            lille har jeg været pjattet med teknologi.
            <br />
            Efter nogle år med små mods til forskellige spil, fik jeg øjnene op
            for business-programmering. Der startede jeg på TEC i Datatekniker
            med speciale i programmering. Uddannelsen var ikke lige præcist hvad
            jeg ønskede, så jeg satte mig igang med HF så jeg kunne blive
            datamatiker hos CPHBusiness. Det er jeg rigtig glad for.
          </p>
          <button className="pt-4 text-blue-400 font-bold">
            Lad os lave noget sammen!
          </button>
        </div>
        <div className="relative h-auto w-96">
          <Image
            src={"/profile-big.png"}
            alt="Profile picture of me"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
