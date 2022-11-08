import {useEffect, useState} from "react";

export const useScrollCheck = (d: number) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrolled(window.scrollY > d);
		}, {passive: true});

		return window.removeEventListener("scroll", () => setScrolled(false));
	}, [d, setScrolled]);
	return scrolled;
}