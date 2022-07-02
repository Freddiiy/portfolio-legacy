import {Fragment, ReactNode, useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {GoMarkGithub} from "react-icons/go";
import {FiMenu, FiX} from "react-icons/fi";

import {Dialog, Transition, Popover} from "@headlessui/react";
import ProfileCard from "../ProfileCard/ProfileCard";

const links = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Om mig",
		href: "/about"
	},
	{
		name: "Kontakt",
		href: "/contact"
	},
]

export default function Header({children}: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setIsScrolled(window.scrollY > 5);
		})
	})

	return (
		<>
			<div
				className={`${isScrolled ? "border-b border-b-gray-600 bg-black border-opacity-50" : "border-transparent"} bg-transparent fixed transition-opacity z-40 w-full h-16 backdrop-blur bg-opacity-80 transition-all`}>
				<div className={"relative flex items-center justify-between h-full px-5 m-auto sm:container"}>
					<ProfileMenu/>
					<div className={"hidden m-auto space-x-8 md:flex"}>
						{links.map((link) => (
							<Link key={link.name} href={link.href}>
								<a className={"text-gray-300 hover:text-white cursor-pointer"}>
									{link.name}
								</a>
							</Link>
						))}
					</div>

					<div className={"flex hidden md:block"}>
						<Link href={"https://github.com/Freddiiy"}>
							<a>
								<GoMarkGithub className={"text-white w-8 h-8"}/>
							</a>
						</Link>
					</div>
					<div className={"block md:hidden cursor-pointer"} onClick={openMenu}>
						<FiMenu className={"text-white w-8 h-8"}/>
					</div>
				</div>
			</div>
			<main>
				{children}
			</main>

			<ModalMenu/>
		</>
	)

	function ProfileMenu() {
		return (
			<>
				<Popover className={"p-3"}>
					<Popover.Button>
						<div className={"flex justify-start focus:outline-0"}>
							<div className={"relative w-12 h-12 mr-3"}>
								<Image src={"/profile.png"} alt={""} layout={"fill"} className={"rounded-full"}/>
							</div>
							<div className={"block"}>
								<h3 className={"text-xl font-bold"}>Frederik</h3>
								<p className={"text-gray-400 text-xs"}>Webudvikler</p>
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
		)
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
							<div className={"flex justify-end mt-4 mr-5 cursor-pointer"} onClick={closeMenu}>
								<FiX className={"w-8 h-8 text-white"}/>
							</div>
							<Dialog.Title
								className={"text-lg text-2xl text-center font-medium text-white"}
							>
								Menu
							</Dialog.Title>
							<div className={"flex flex-col text-center mt-20"}>
								{links.map((link) => (
									<MobileLink key={link.name} name={link.name} href={link.href}/>
								))}
								<MobileLink name={"Github"} href={"https://github.com/Freddiiy"}/>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		)
	}
}

function MobileLink({name, href}: { name: string, href: string }) {
	return (
		<>
			<Link key={name} href={href}>
				<div className={"mb-5 text-4xl text-gray-300 hover:text-white cursor-pointer"}>
					{name}
				</div>
			</Link>
		</>
	)
}

