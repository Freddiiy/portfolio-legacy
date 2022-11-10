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
					transform: `translate3d(0px, ${scrollDistance * 0.60}px, 0px) scale(${1 - (scrollDistance * 0.0004)})`,
					opacity: `${1 - (scrollDistance * 0.0025)}`,
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
							<div className="relative h-40 sm:h-72 w-auto z-10">
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
				<div className={"relative bg-black z-20 pt-4 pb-12"}>
					<p>{project.desc}</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam ac. Et
						molestie ac feugiat sed lectus. Ultrices neque ornare aenean euismod elementum nisi quis
						eleifend quam. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tortor at auctor urna
						nunc. Blandit turpis cursus in hac habitasse platea dictumst quisque. Tortor dignissim convallis
						aenean et tortor at risus. Eget dolor morbi non arcu risus. Dignissim sodales ut eu sem integer.
						Duis at consectetur lorem donec massa sapien faucibus et. Purus gravida quis blandit turpis
						cursus in hac. Porttitor leo a diam sollicitudin. Morbi blandit cursus risus at. Accumsan sit
						amet nulla facilisi morbi tempus iaculis. Tortor at risus viverra adipiscing at in tellus
						integer.

						Ut ornare lectus sit amet est placerat in. Lacus suspendisse faucibus interdum posuere lorem
						ipsum dolor. Neque laoreet suspendisse interdum consectetur. Accumsan tortor posuere ac ut.
						Aliquet lectus proin nibh nisl condimentum id. Convallis a cras semper auctor neque vitae.
						Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Amet mattis
						vulputate enim nulla aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
						Et netus et malesuada fames ac turpis egestas maecenas. Ullamcorper a lacus vestibulum sed arcu
						non odio.
					</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam ac. Et
						molestie ac feugiat sed lectus. Ultrices neque ornare aenean euismod elementum nisi quis
						eleifend quam. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tortor at auctor urna
						nunc. Blandit turpis cursus in hac habitasse platea dictumst quisque. Tortor dignissim convallis
						aenean et tortor at risus. Eget dolor morbi non arcu risus. Dignissim sodales ut eu sem integer.
						Duis at consectetur lorem donec massa sapien faucibus et. Purus gravida quis blandit turpis
						cursus in hac. Porttitor leo a diam sollicitudin. Morbi blandit cursus risus at. Accumsan sit
						amet nulla facilisi morbi tempus iaculis. Tortor at risus viverra adipiscing at in tellus
						integer.

						Ut ornare lectus sit amet est placerat in. Lacus suspendisse faucibus interdum posuere lorem
						ipsum dolor. Neque laoreet suspendisse interdum consectetur. Accumsan tortor posuere ac ut.
						Aliquet lectus proin nibh nisl condimentum id. Convallis a cras semper auctor neque vitae.
						Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Amet mattis
						vulputate enim nulla aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
						Et netus et malesuada fames ac turpis egestas maecenas. Ullamcorper a lacus vestibulum sed arcu
						non odio.
					</p>					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam ac. Et
						molestie ac feugiat sed lectus. Ultrices neque ornare aenean euismod elementum nisi quis
						eleifend quam. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tortor at auctor urna
						nunc. Blandit turpis cursus in hac habitasse platea dictumst quisque. Tortor dignissim convallis
						aenean et tortor at risus. Eget dolor morbi non arcu risus. Dignissim sodales ut eu sem integer.
						Duis at consectetur lorem donec massa sapien faucibus et. Purus gravida quis blandit turpis
						cursus in hac. Porttitor leo a diam sollicitudin. Morbi blandit cursus risus at. Accumsan sit
						amet nulla facilisi morbi tempus iaculis. Tortor at risus viverra adipiscing at in tellus
						integer.

						Ut ornare lectus sit amet est placerat in. Lacus suspendisse faucibus interdum posuere lorem
						ipsum dolor. Neque laoreet suspendisse interdum consectetur. Accumsan tortor posuere ac ut.
						Aliquet lectus proin nibh nisl condimentum id. Convallis a cras semper auctor neque vitae.
						Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Amet mattis
						vulputate enim nulla aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
						Et netus et malesuada fames ac turpis egestas maecenas. Ullamcorper a lacus vestibulum sed arcu
						non odio.
					</p>					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam ac. Et
						molestie ac feugiat sed lectus. Ultrices neque ornare aenean euismod elementum nisi quis
						eleifend quam. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tortor at auctor urna
						nunc. Blandit turpis cursus in hac habitasse platea dictumst quisque. Tortor dignissim convallis
						aenean et tortor at risus. Eget dolor morbi non arcu risus. Dignissim sodales ut eu sem integer.
						Duis at consectetur lorem donec massa sapien faucibus et. Purus gravida quis blandit turpis
						cursus in hac. Porttitor leo a diam sollicitudin. Morbi blandit cursus risus at. Accumsan sit
						amet nulla facilisi morbi tempus iaculis. Tortor at risus viverra adipiscing at in tellus
						integer.

						Ut ornare lectus sit amet est placerat in. Lacus suspendisse faucibus interdum posuere lorem
						ipsum dolor. Neque laoreet suspendisse interdum consectetur. Accumsan tortor posuere ac ut.
						Aliquet lectus proin nibh nisl condimentum id. Convallis a cras semper auctor neque vitae.
						Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Amet mattis
						vulputate enim nulla aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
						Et netus et malesuada fames ac turpis egestas maecenas. Ullamcorper a lacus vestibulum sed arcu
						non odio.
					</p>
				</div>
			</section>
		</>
	);
}

export default Project;
