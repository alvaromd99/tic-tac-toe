export const BtnSelector = ({ index, mode, changeGameMode }) => {
	const resultNames = ['(VS CPU)', '(VS PLAYER 2)']
	const resultName = resultNames[index] || ''

	const classNames = ['bg-primary', 'bg-gray', 'bg-secondary']
	const className = classNames[index] || ''

	console.log(mode)
	return (
		<button
			className={`${className} w-96 h-20 rounded-lg`}
			onClick={() => changeGameMode(mode)}>
			{`NEW GAME ${resultName}`}
		</button>
	)
}
