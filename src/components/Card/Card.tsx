import {Icon} from "react-feather";
import React, {FC, ReactElement, ReactNode} from "react";
import Image, {ImageProps} from "next/image";

export interface CardProps {
	title: string,
	text: string,
	element?: ReactElement,
}

export default function Card({title, text, element}: CardProps): ReactElement | null {
	return (
		<>
			<div className={"max-w-sm rounded-2xl overflow-hidden border border-gray-600 border-opacity-50 p-4"}>
				<div className={"flex flex-col items-center"}>
					<div className={"flex flex-row items-center"}>
						<div className={"relative w-12 h-12 mr-3"}>
							<>{element}</>
						</div>
						<div className={"font-bold"}>
							<p>{title}</p>
						</div>
					</div>
					<div className={"h24 w-24"}>
						<h3 className={"text-center text-"}>{text}</h3>
					</div>
				</div>
			</div>
		</>
	)
}