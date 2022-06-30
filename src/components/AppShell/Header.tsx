import {Fragment, ReactNode, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {GoMarkGithub} from "react-icons/go";
import {FiMenu, FiX} from "react-icons/fi";

import {Dialog, Transition} from "@headlessui/react";

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
	const [isOpen, setIsOpen] = useState(false);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<>
			<div className={"fixed transition-opacity z-40 w-full h-16 bg-transparent backdrop-blur "}>
				<div className={"relative flex items-center justify-between h-full px-5 m-auto sm:container"}>
					<Link href={"/"} passHref>
						<a className={"absolute flex flex-row items-center"}>
							<div className={"relative w-12 h-12 mr-3"}>
								<Image src={"/profile.png"} alt={""} layout={"fill"} className={"rounded-full"}/>
							</div>
							<h3 className={"text-xl font-bold"}>Frederik</h3>
						</a>
					</Link>

					<div className={"hidden m-auto md:flex justify-end"}>
						{links.map((link) => (
							<Link key={link.name} href={link.href}>
								<a className={"mr-3 text-gray-300 hover:text-white cursor-pointer"}>
									{link.name}
								</a>
							</Link>
						))}
					</div>

					<div className={"flex"}>
						<Link href={"https://github.com/Freddiiy"}>
							<a>
								<GoMarkGithub className={"text-white w-8 h-8"}/>
							</a>
						</Link>
					</div>
					<div className={"block md:hidden cursor-pointer"} onClick={open}>
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

	function ModalMenu() {

		let focusRef = useRef(null);

		return (
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as={"div"}
					open={isOpen}
					onClose={close}
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
							<div className={"flex justify-end mt-4 mr-5 cursor-pointer"} onClick={close}>
								<FiX className={"w-8 h-8 text-white"}/>
							</div>
							<Dialog.Title
								className={"text-lg text-2xl text-center font-medium text-white"}
							>
								Menu
							</Dialog.Title>
							<div className={"flex flex-col text-center mt-20"}>
								{links.map((link) => (
									<div key={link.name} className={"mb-5 text-4xl text-gray-300 hover:text-white cursor-pointer"}>
										<Link key={link.name} href={link.href}>
											<a>
												{link.name}
											</a>
										</Link>
									</div>
								))}
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		)
	}
}

