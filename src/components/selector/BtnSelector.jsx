import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const BtnSelector = ({ mode, btnName, className }) => {
	const { changeGameMode } = useContext(GameContext)
	return (
		<button
			className={`${className} w-large h-18 rounded-lg text-xl text-darkBlue font-bold`}
			onClick={() => changeGameMode(mode)}>
			{`NEW GAME ${btnName}`}
		</button>
	)
}
