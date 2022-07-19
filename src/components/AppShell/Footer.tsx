import {FaHeart, FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {TbBrandNextjs, TbBrandVercel} from "react-icons/tb";

export default function Footer() {
	return (
		<section className="border-t border-gray-500 bg-zinc-900 py-4">
			<div className="flex items-center text-lg justify-center">
				Made with <FaHeart className="mx-1 text-red-600" /> from Copenhagen.
			</div>
			<div className="flex items-center text-lg justify-center">
				Created with <SiTailwindcss className="mx-1 text-cyan-400" /> Tailwind,{" "}
				<FaReact className="mx-1 text-blue-500" /> React, and
				<TbBrandNextjs className="mx-1" /> Next. Hosted at{" "}
				<TbBrandVercel className="mx-1" /> Vercel.
			</div>
		</section>
	);
}
