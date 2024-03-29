import {GetStaticPaths, NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {FaAngleLeft} from "react-icons/fa";
import slugify from "slugify";
import {UrlObject} from "url";

export interface IProject {
	title: string;
	desc: string;
	img: string;
	github?: string;
	live?: string;
}

export let projects: IProject[] = [
	{
		title: "Velkoz.lol",
		desc: "Hobby-project med en ven (Dødt)",
		img: "/projects/velkoz.png",
		github: "https://github.com/bentsen/velkoz.lol",
		live: "https://velkoz.lol/",
	},
	{
		title: "CG Care hjemmeside",
		desc: "Simpel hjemmeside til CG Care massagefirma med prisudregner.",
		img: "/projects/cgcare.png",
		live: "https://cgcare.dk/",
	},
	{
		title: "WOW Mount Viewer",
		desc: "Skoleproject. En webapp til at tracke hvilke mounts man ejer i wow. (Dødt)",
		img: "/projects/mount-viewer.png",
		github: "https://github.com/Freddiiy/mount-viewer-frontend",
		live: "https://mount-viewer.vercel.app/",
	},
	{
		title: "FOG Carport Builder",
		desc: "Eksamensprojekt hos CPHBusiness. Gruppeopgave. (Dødt)",
		img: "/projects/fog-project.png",
		github: "https://github.com/Freddiiy/cphbusiness-fog",
		live: "https://www.youtube.com/watch?v=7VPCYVwcpFs",
	},
];

const Projects: NextPage = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<section className="container mx-auto pt-28 pb-10">
				<div className="block mb-6 ml-3">
					<h2 className="text-4xl md:text-6xl font-bold md:pb-3">
						Mine projekter
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-3">
					{projects.map((project, i) => (
						<ProjectCard
							key={i}
							title={project.title}
							desc={project.desc}
							img={project.img}
							href={slugify(project.title.toLowerCase())}
						/>
					))}
				</div>
			</section>
		</>
	);
};

function ProjectCard({
						 title,
						 desc,
						 img,
						 href,
					 }: {
	title: string;
	desc: string;
	img: string;
	href: string | UrlObject;
}) {
	return (
		<Link href={`/projects/${href}`} passHref>
			<div
				className="group border bg-neutral-900 hover:bg-neutral-800 border-gray-300 border-opacity-50 hover:border-gray-300 hover:border-opacity-100 transition-all duration-200 rounded-lg hover:cursor-pointer">
				<div
					className="relative h-72 w-full overflow-hidden border-black transition-all duration-300 rounded-t-lg bg-">
					<Image
						src={img}
						alt={""}
						fill
						className="group-hover:scale-110 object-cover w-full h-full transition-all duration-500 rounded-t-lg"
					/>
				</div>
				<div className="p-5">
					<h4 className="pb-2 font-semibold text-lg group-hover:-translate-y-1 transition-all duraction-500">{title}</h4>
					<p className="text-sm text-gray-300 group-hover:-translate-y-1 transition-all duraction-500">{desc}</p>
				</div>
				<></>
			</div>
		</Link>
	);
}

export default Projects;
