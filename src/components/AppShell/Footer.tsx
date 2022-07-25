import { FaHeart, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full border-t border-gray-500 bg-zinc-900 py-4"
    >
      <div className="flex text-center items-center justify-center text-lg">
        Made with <FaHeart className="inline mx-1 text-red-600" /> from
        Copenhagen.
      </div>
      <div className="flex text-center items-center justify-center text-lg">
        <div className="justify-center text-center">
          Created with <SiTailwindcss className="inline text-cyan-400" />
          Tailwind, <FaReact className="inline text-blue-500" /> React, and{" "}
          <TbBrandNextjs className="inline" /> Next. Hosted at{" "}
          <TbBrandVercel className="inline-block" /> Vercel.
        </div>
      </div>
    </footer>
  );
}
