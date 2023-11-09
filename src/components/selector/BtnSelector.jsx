export const BtnSelector = ({ mode, changeGameMode, btnName, className }) => {
	return (
		<button
			className={`${className} w-large h-18 rounded-lg text-xl text-darkBlue font-bold`}
			onClick={() => changeGameMode(mode)}>
			{`NEW GAME ${btnName}`}
		</button>
	)
}
