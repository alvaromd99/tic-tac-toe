import { ArrowLeft } from '../../icons/ArrowLeft'

export const BackBtn = ({ changeGameMode }) => {
	return (
		<div
			onClick={() => changeGameMode(null)}
			className='absolute top-4 left-4 w-28 h-10 border-2 border-gray  flex items-center justify-evenly'>
			<ArrowLeft width='2em' height='2em' color='#aabfca' />
			<p className='font-bold text-gray'>Back</p>
		</div>
	)
}
