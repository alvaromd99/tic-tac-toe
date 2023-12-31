import { useContext } from 'react'
import { ArrowLeft } from '../../icons/ArrowLeft'
import { GameContext } from '../../context/GameContext'

export const BackBtn = () => {
	const { changeGameMode } = useContext(GameContext)
	return (
		<div
			onClick={() => changeGameMode(null)}
			className='absolute top-4 left-4 w-28 h-10 border-2 border-gray  flex items-center justify-evenly shadow-2'>
			<ArrowLeft width='2em' height='2em' color='#aabfca' />
			<p className='font-bold text-gray'>Back</p>
		</div>
	)
}
