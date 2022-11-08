const Title = ({text}: {text: string}) => {
	return (
		<h2 className={"text-center text-white text-3xl sm:text-4xl font-bold mb-4 sm:mb-8"}>
			{text}
		</h2>
	)
}

export default Title