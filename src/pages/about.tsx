import { NextPage } from "next";
import Image from "next/image";
import { useLocale } from "../hooks/useLocale";
import aboutLocale from "../locales/about.json";
import headerLocale from "../locales/header.json";
import dayjs from "dayjs";
import Head from "next/head";

const About: NextPage = () => {
  let aboutText = useLocale(aboutLocale);
  let headerText = useLocale(headerLocale);

  return (
    <>
      <Head>
        <title>{headerText.links[1].name}</title>
      </Head>
      <section className="container mx-auto max-w-5xl px-5 md:px-28">
        <BlogPost
          name="Frederik Galler"
          img="/profile.png"
          date={dayjs()
            .set("date", 24)
            .set("month", 6)
            .set("year", 2022)
            .format("DD MMM YYYY")}
          title={aboutText.title}
          text={aboutText.text}
        />
      </section>
    </>
  );
};

interface BlogPostProps {
  name: string;
  img: string;
  date: string;
  title: string;
  text: string;
}

function BlogPost({ name, img, date, title, text }: BlogPostProps) {
  return (
    <>
      <div className="flex flex-col pt-24">
        <div className="flex-row items-start">
          <Author name={name} img={img} date={date} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <div
          className="text-lg md:text-lg pt-6 leading-loose"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </>
  );
}

interface AuthorProps {
  name: string;
  img: string;
  date: string;
}

function Author({ name, img, date }: AuthorProps) {
  return (
    <>
      <div className="flex flex-row mb-10">
        <div className="relative h-16 w-16">
          <Image
            src={img}
            alt="profile picture"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col ml-6 justify-center">
          <div className="text-md md:text-lg text-gray-200">
            <h3>{name}</h3>
          </div>
          <div className="text-sm md:text-md text-gray-400">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
