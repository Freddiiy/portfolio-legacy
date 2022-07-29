import {Fragment, ReactNode, useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {GoMarkGithub} from "react-icons/go";
import {FiMenu, FiX} from "react-icons/fi";

import {Dialog, Transition, Popover} from "@headlessui/react";
import ProfileCard from "../ProfileCard/ProfileCard";
import headerLocale from "../../locales/header.json";
import {useRouter} from "next/router";
import {useLocale} from "../../hooks/useLocale";

export default function Header({children}: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);
	const router = useRouter();

	let localeText = useLocale(headerLocale);

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setIsScrolled(window.scrollY > 5);
		});
	});

	const colors = ["text-purple-400", "text-emerald-400", "text-blue-400", "text-pink-500", "text-orange-500"]

	return (
		<>
			<div
				className={`${
					isScrolled
						? "border-b border-b-gray-600 bg-black border-opacity-50 backdrop-blur bg-opacity-80"
						: "border-transparent"
				} bg-transparent fixed z-40 w-full h-16 transition-all`}
			>
				<div
					className={
						"relative flex items-center justify-between h-full px-5 m-auto sm:container"
					}
				>
					<ProfileMenu/>
					<div className={"hidden m-auto space-x-8 md:flex"}>
						{localeText.links.map((link: any, i: number) => (
							<Link key={link.name} href={link.href} passHref>
								<a
									className={`
									${router.pathname === link.href
										? `${colors[i]} font-bold`
										: "text-gray-300"
									} 
										hover:text-white cursor-pointer transition-all duration-200`}
								>
									{link.name}
								</a>
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
							<a>
								<GoMarkGithub className={"text-white w-8 h-8"}/>
							</a>
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
				<Popover className={"p-3"}>
					<Popover.Button className={"custom-focus"}>
						<div className={"flex justify-start"}>
							<div className={"relative w-12 h-12 mr-3"}>
								<Image
									src={"/profile.png"}
									alt={"Profile picture"}
									layout={"fill"}
									className={"rounded-full"}
								/>
							</div>
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
						enterFrom="opacity-0 translate-y-1"
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
		let focusRef = useRef(null);
		return (
			<Transition appear show={isMenuOpen} as={Fragment}>
				<Dialog
					as={"div"}
					open={isMenuOpen}
					onClose={closeMenu}
					className={"fixed inset-0 z-40 bg-black h-screen w-full"}
					initialFocus={focusRef}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Dialog.Panel className={"w-full"}>
							<div
								className={"flex justify-end mt-4 mr-5 cursor-pointer"}
								onClick={closeMenu}
							>
								<FiX className={"w-8 h-8 text-white"}/>
							</div>
							<Dialog.Title
								className={"text-2xl text-center font-medium text-white"}
							>
								Menu
							</Dialog.Title>
							<div
								className="tap keyboard before accessibility trapper"
								ref={focusRef}
							/>
							<div className={"flex flex-col text-center mt-20"}>
								{localeText.links.map((link: any) => (
									<MobileLink
										key={link.name}
										name={link.name}
										href={link.href}
									/>
								))}
								<MobileLink
									name={"Github"}
									href={"https://github.com/Freddiiy"}
								/>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		);
	}

	function MobileLink({name, href}: { name: string; href: string }) {
		return (
			<>
				<div className="mb-4">
					<Link key={name} href={href}>
						<button
							type="button"
							className={
								"text-4xl text-gray-300 hover:text-white rounded-xl cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
							}
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

	function handleLocaleChange() {
		setIsEnglishState(!isEnglishState);
		router.push({pathname, query}, asPath, {locale: localeState});
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
