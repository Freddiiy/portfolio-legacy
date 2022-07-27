import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import slugify from "slugify";
import { projects } from ".";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: slugify(project.title.toLowerCase()) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: { slug: { ctx } },
  };
};

const Project: NextPage = ({ ctx }) => {
  return (
    <>
      <Head>
        <title>{ctx.title}</title>
      </Head>
      <section className="container mx-auto pt-28">
        <div className="block mb-6 ml-3">
          <h2 className="text-4xl md:text-6xl font-bold md:pb-3">
            Mine projekter
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-3"></div>
      </section>
    </>
  );
};

export default Project;
