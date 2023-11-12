import IconX from '../../icons/IconX'
import IconO from '../../icons/IconO'
import IconReset from '../../icons/IconReset'
import { DisplayIcons } from '../../icons/DisplayIcons'

export default function Header({ turn, resetGame }) {
	return (
		<div className='flex items-center gap-8'>
			<div className='w-40'>
				<DisplayIcons />
			</div>
			<div className='w-40 h-14 bg-squareColor text-gray rounded flex items-center justify-center gap-2 shadow-2'>
				{turn === 'x' && <IconX width='1.4em' height='1.4em' color='#aabfca' />}
				{turn === 'o' && <IconO width='1.4em' height='1em' color='#aabfca' />}
				<p>TURN</p>
			</div>
			<div className='w-40 flex justify-end'>
				<button
					onClick={resetGame}
					className='bg-gray w-14 h-14 flex items-center justify-center rounded shadow-2'>
					<IconReset width='1.8em' height='1.8em' color='#1a2b33' />
				</button>
			</div>
		</div>
	)
}
