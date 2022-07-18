import { FaHeart, FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="border-t border-gray-500 bg-zinc-900 py-4">
      <div className="flex items-center text-lg justify-center">
        Made with <FaHeart className="mx-1 text-red-600" /> and{" "}
        <FaReact className="mx-1 text-blue-500" /> from Copenhagen
      </div>
    </section>
  );
}
