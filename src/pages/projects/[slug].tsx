import {
	GetStaticPaths,
	GetStaticProps,
	InferGetServerSidePropsType,
	InferGetStaticPropsType,
	NextPage,
} from "next";
import Head from "next/head";
import slugify from "slugify";
import {IProject, projects} from ".";
import {ParsedUrlQuery} from "querystring";
import Image from "next/image";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";

interface IParams extends ParsedUrlQuery {
	slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = projects.map((p) => ({
		params: {slug: slugify(p.title.toLowerCase())},
	}));
	return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const {slug} = ctx.params as IParams;
	const projectArray = projects.filter(
		(p) => slugify(p.title.toLowerCase()) === slug
	);
	const project = projectArray[0];
	return {props: {project}};
};

function Project({project}: {project: IProject}) {
	return (
		<>
			<Head>
				<title>{project.title}</title>
			</Head>
			<section className="container mx-auto pt-28 px-4">
				<div className="block mb-6">
					<h2 className="text-4xl md:text-6xl font-bold md:pb-1">
						{project.title}
					</h2>
					<div className="flex flex-row ml-3 items-center justify-start mb-4">
						{project.github && (
							<Link href={project.github} passHref>
								<a className="mr-3 text-gray-300 hover:text-white cursor-pointer">
									<FaGithub />
								</a>
							</Link>
						)}
						{project.live && (
							<Link href={project.live}>
								<a className="mr-3 text-gray-300 hover:text-white cursor-pointer">
									Live
								</a>
							</Link>
						)}
					</div>
					{project.img && (
						<div className="relative h-72 w-72">
							<Image
								src={project.img}
								alt=""
								layout="fill"
								className="rounded-xl"
							/>
						</div>
					)}
				</div>
				<p>{project.desc}</p>
			</section>
		</>
	);
}

export default Project;
