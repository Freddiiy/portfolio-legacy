import {
	GetStaticPaths,
	GetStaticProps,
} from "next";
import Head from "next/head";
import slugify from "slugify";
import {IProject, projects} from ".";
import {ParsedUrlQuery} from "querystring";
import Image from "next/image";
import {FaAngleLeft, FaGithub} from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/router";
import {useScrollDistance} from "../../hooks/useScrollDistance";

interface IParams extends ParsedUrlQuery {
	slug: string;
}

interface IPath {
	params: {
		slug: string;
	};
	locale: string;
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
	let paths: IPath[] = [];

	projects.forEach((p) => {
		locales?.forEach((locale) => {
			paths.push({
				params: {slug: slugify(p.title.toLowerCase())},
				locale,
			});
		});
	});

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

function Project({project}: { project: IProject }) {
	const router = useRouter();

	const scrollDistance = useScrollDistance();
	return (
		<>
			<Head>
				<title>{project.title}</title>
			</Head>
			<section className="container mx-auto pt-20 px-4">
				<div className={"relative"} style={{
					transform: `translate3d(0px, ${scrollDistance * 0.42}px, 0px)`
				}}>

					<Link href={"/projects"} passHref>
						<div
							className="group flex flex-row mr-4 justify-start items-center hover:underline cursor-pointer transition-all duration-100 mb-3">
						<span className="inline relative">
							<FaAngleLeft
								className="translate-x-0 group-hover:-translate-x-2 transition-all duration-100"/>
						</span>
							{router.locale == "da-DK" ? "Tilbage" : "Back"}
						</div>
					</Link>
					<div className="block">
						<h2 className="text-4xl md:text-6xl font-bold md:pb-1">
							{project.title}
						</h2>
						<div className="flex flex-row ml-3 items-center justify-start mb-4">
							{project.github && (
								<Link href={project.github} passHref>
									<div className="mr-3 text-gray-300 hover:text-white cursor-pointer">
										<FaGithub/>
									</div>
								</Link>
							)}
							{project.live && (
								<Link href={project.live}>
									<div className="mr-3 text-gray-300 hover:text-white cursor-pointer">
										Live
									</div>
								</Link>
							)}
						</div>
						{project.img && (
							<div className="relative h-72 w-auto z-10">
								<Image
									src={project.img}
									alt=""
									className={"rounded-xl object-cover"}
									fill
								/>
							</div>
						)}
					</div>
				</div>
				<div className={"relative bg-black z-20 py-12"}>
					<p>{project.desc}</p>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus PageMaker including versions of
						Lorem Ipsum.

						Why do we use it?
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content here', making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
						their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).


						Where does it come from?
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
						classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
						Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
						words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
						classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
						and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
						written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
						Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
						section 1.10.32.

						The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
						Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
						in their exact original form, accompanied by English versions from the 1914 translation by H.
						Rackham.

						Where can I get some?
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
						anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
						Internet tend to repeat predefined chunks as necessary, making this the first true generator on
						the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
						sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
						is therefore always free from repetition, injected humour, or non-characteristic words etc.

						5
						paragraphs
						words
						bytes
						lists
						Start with 'Lorem
						ipsum dolor sit amet...'
					</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus PageMaker including versions of
						Lorem Ipsum.

						Why do we use it?
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content here', making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
						their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).


						Where does it come from?
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
						classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
						Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
						words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
						classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
						and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
						written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
						Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
						section 1.10.32.

						The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
						Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
						in their exact original form, accompanied by English versions from the 1914 translation by H.
						Rackham.

						Where can I get some?
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
						anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
						Internet tend to repeat predefined chunks as necessary, making this the first true generator on
						the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
						sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
						is therefore always free from repetition, injected humour, or non-characteristic words etc.

						5
						paragraphs
						words
						bytes
						lists
						Start with 'Lorem
						ipsum dolorx sit amet...'
					</p>
				</div>
			</section>
		</>
	);
}

export default Project;
