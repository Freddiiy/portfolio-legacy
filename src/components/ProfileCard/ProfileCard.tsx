import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import headerLocale from "../../locales/header.json";
import { useLocale } from "../../hooks/useLocale";

export default function ProfileCard() {
  return (
    <>
      <div className={"flex bg-gray-50 justify-center w-full p-4 rounded"}>
        <ProfileHeader />
      </div>
    </>
  );
}

function ProfileHeader() {
  const localeText = useLocale(headerLocale);

  return (
    <>
      <div className={"flex flex-col items-center justify-center"}>
        <div className={"relative w-16 p-16 rounded-full mb-2"}>
          <Image src={"/profile.png"} alt={"Mig"} layout={"fill"} />
        </div>
        <h1 className={"text-black text-2xl font-bold mb-3"}>
          {localeText.profile.name}
        </h1>
        <p className={"text-gray-500"}>{localeText.profile.title}</p>
        <a className={"flex flex-row text-gray-500 items-center"}>
          <FiMapPin className={"mr-1"} /> {localeText.profile.location}
        </a>
        <div className={"flex flex-col mt-7 w-full"}>
          <GithubButton />
          <LinkedInButton />
        </div>
      </div>
    </>
  );
}

function GithubButton() {
  return (
    <>
      <Link href={"https://github.com/Freddiiy"}>
        <div
          className={
            "flex items-center justify-center w-full rounded-full px-2 py-2 bg-gray-900 mb-1 cursor-pointer"
          }
        >
          <button className={"flex flex-row items-center"}>
            <div className={"mr-1"}>
              <a className={"w-12 h-12"}>
                <GoMarkGithub />
              </a>
            </div>
            <p className={"text-white font-bold"}>GitHub</p>
          </button>
        </div>
      </Link>
    </>
  );
}

function LinkedInButton() {
  return (
    <>
      <Link href={"https://www.linkedin.com/in/frederik-galler-1914b7105/"}>
        <div
          className={
            "flex items-center justify-center w-full rounded-full px-2 py-2 bg-blue-600 mb-1 cursor-pointer"
          }
        >
          <button className={"flex flex-row items-center"}>
            <div className={"mr-1"}>
              <a className={"w-12 h-12"}>
                <FiLinkedin />
              </a>
            </div>
            <p className={"text-white font-bold"}>LinkedIn</p>
          </button>
        </div>
      </Link>
    </>
  );
}
