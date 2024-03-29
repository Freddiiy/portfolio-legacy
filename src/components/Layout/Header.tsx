import {Fragment, ReactNode, useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FiMenu, FiX, FiGithub, FiGift} from "react-icons/fi";

import {Dialog, Transition, Popover} from "@headlessui/react";
import ProfileCard from "../ProfileCard/ProfileCard";
import headerLocale from "../../locales/header.json";
import {useRouter} from "next/router";
import {useLocale} from "../../hooks/useLocale";
import {useScrollCheck} from "../../hooks/useScrollCheck";
import {DiGithubBadge} from "react-icons/di";

const colors = ["text-purple-400", "text-emerald-400", "text-blue-400", "text-pink-500", "text-orange-500"]

export default function Header({children}: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);
	const router = useRouter();

	let localeText = useLocale(headerLocale);

	const isScrolled = useScrollCheck(5)

	return (
		<>
			<div
				className={`${
					isScrolled
						? "border-b border-b-gray-600 bg-black border-opacity-50 backdrop-blur bg-opacity-80"
						: "border-transparent"
				} bg-transparent fixed z-40 w-full h-16 transition-all duration-200`}
			>
				<div
					className={
						"relative flex items-center justify-between h-full px-5 m-auto sm:container"
					}
				>
					<ProfileMenu/>
					<div className={"hidden m-auto md:flex justify-start"}>
						{localeText.links.map((link: any, i: number) => (
							<Link key={link.name} href={link.href} passHref>
								<div
									className={`
									${router.pathname == link.href
										? `${colors[i]} font-bold`
										: "text-gray-300"
									} 
										hover:text-white mx-4 cursor-pointer transition-all duration-200`}
								>
									{link.name}
								</div>
							</Link>
						))}
					</div>
					<div className="flex flex-row justify-center items-center">
						<div className="mr-4">
							<LocaleSwitch/>
						</div>
						<div
							className={"block md:hidden cursor-pointer"}
							onClick={openMenu}
						>
							<FiMenu className={"text-white w-8 h-8"}/>
						</div>
					</div>
					<div className={"hidden md:block"}>
						<Link href={"https://github.com/Freddiiy"}>
							<div>
								<DiGithubBadge className={"text-white w-8 h-8"}/>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<main>{children}</main>
			<ModalMenu/>
		</>
	);

	function ProfileMenu() {
		return (
			<>
				<Popover className={"py-3"}>
					<Popover.Button className={"custom-focus"}>
						<div className={"flex justify-start"}>
							<div className={"flex flex-col justify-start items-start"}>
								<h3 className={"text-xl font-bold"}>Frederik</h3>
								<p className={"text-gray-400 text-xs"}>
									{localeText.profile.title}
								</p>
							</div>
						</div>
					</Popover.Button>
					<Transition
						appear
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-2"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className={"absolute z-10"}>
							<ProfileCard/>
						</Popover.Panel>
					</Transition>
				</Popover>
			</>
		);
	}

	function ModalMenu() {
		return (
							<div className={"flex flex-col text-center mt-20 space-y-4"}>
								{localeText.links.map((link: any, i: number) => (
									<MobileLink
										key={link.name}
										name={link.name}
										href={link.href}
										iter={i}
									/>
								))}
								<MobileLink
									name={"Github"}
									href={"https://github.com/Freddiiy"}
									iter={1}
								/>
							</div>
		);
	}

	function MobileLink({name, href, iter}: { name: string; href: string, iter:number }) {
		return (
			<>
				<div className="mb-4">
					<Link key={name} href={href}>
						<button
							type="button"
							className={`
							${router.pathname == href
								? `${colors[iter]}`
								: "text-gray-300"
							} 
								text-4xl text-gray-300 hover:text-white rounded-xl cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-2
							`}
							onClick={closeMenu}
						>
							{name}
						</button>
					</Link>
				</div>
			</>
		);
	}
}

function LocaleSwitch() {
	const [isEnglishState, setIsEnglishState] = useState<boolean>();
	let localeState = isEnglishState ? "da-DK" : "en-US";
	const router = useRouter();
	const {pathname, asPath, query} = router;

	async function handleLocaleChange() {
		setIsEnglishState(!isEnglishState);
		await router.push({pathname, query}, asPath, {locale: localeState});
	}

	return (
		<>
			<button
				className="text-gray-300 hover:text-white text-md"
				onClick={handleLocaleChange}
			>
				{router.locale === "da-DK" ? "English" : "Dansk"}
			</button>
		</>
	);
}
