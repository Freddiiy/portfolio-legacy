import { NextPage } from "next";
import Image from "next/image";
import { useLocale } from "../hooks/useLocale";
import aboutLocale from "../locales/about.json";
import dayjs from "dayjs";

const About: NextPage = () => {
  let aboutText = useLocale(aboutLocale);

  return (
    <section className="container mx-auto">
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
      <div className="flex flex-col justify-center items-center pt-24">
        <div className="flex-row">
          <Author name={name} img={img} date={date} />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-sm text-gray-300">{text}</p>
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
      <div className="flex flex-row">
        <div className="relative h-24 w-24">
          <Image
            src={img}
            alt="profile picture"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="flex-col">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}

export default About;
