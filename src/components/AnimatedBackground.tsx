import React, {useEffect, useState} from "react";
import {useScrollDistance} from "../hooks/useScrollDistance";

const AnimatedBackground = () => {
	const scrollDistance = useScrollDistance()

	return (
		<div className={"relative w-full h-full -z-10"} style={{
			transform: `translate3d(0px, ${scrollDistance * 0.32}px, 0px)`,
		}}>
			<div
				className={
					"absolute -top-60 -right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob2 animate-delay-2s"
				}
			/>
			<div
				className={
					"absolute -top-80 -right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-delay-4s"
				}
			/>
			<div
				className={
					"absolute -top-72 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob2"
				}
			/>
			<div
				className={
					"absolute -top-96 -left-8 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-delay-6s"
				}
			/>
		</div>
	)
}

export default AnimatedBackground