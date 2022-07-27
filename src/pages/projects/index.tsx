import { GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { UrlObject } from "url";

export let projects = [
  {
    title: "WOW Mount Viewer",
    desc: "Skoleproject. En webapp til at tracke hvilke mounts man ejer i wow.",
    img: "/projects/mount-viewer.png",
  },
  {
    title: "CG Care hjemmeside",
    desc: "Simpel hjemmeside til CG Care massagefirma med prisudregner.",
    img: "/projects/cgcare.png",
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <section className="container mx-auto pt-28">
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
    <Link href={href} passHref>
      <div className="group border bg-neutral-900 border-gray-300 border-opacity-50 hover:border-gray-300 hover:border-opacity-100 transition-all duration-200 rounded-lg hover:cursor-pointer">
        <div className="relative w-full h-64 overflow-hidden border-black transition-all duration-300 rounded-t-lg bg-">
          <Image
            src={img}
            alt={""}
            layout="fill"
            className="group-hover:scale-125 transition-all duration-500 rounded-t-lg"
          />
        </div>
        <div className="p-5">
          <h4 className="pb-2 font-semibold text-lg">{title}</h4>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
        <></>
      </div>
    </Link>
  );
}

export default Projects;