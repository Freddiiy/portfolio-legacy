import {useEffect, useState} from "react";

export const useScrollDistance = () => {
	const [scrollDistance, setScrollDistance] = useState<number>(0)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollDistance(window.scrollY);
		}, {passive: true});

		return window.removeEventListener("scroll", () => setScrollDistance(0));
	}, [setScrollDistance]);

	return scrollDistance
}