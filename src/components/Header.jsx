import IconX from '../icons/IconX'
import IconO from '../icons/IconO'
import IconReset from '../icons/IconReset'

export const Header = ({ turn }) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center'>
				<IconX width='2em' height='2em' color='#31c6be' />
				<IconO width='2em' height='1.5em' color='#f2b136' />
			</div>
			<div className='w-40 h-14 bg-squareColor text-gray rounded flex items-center justify-center gap-2 shadow-2'>
				{turn === 'x' && <IconX width='1.4em' height='1.4em' color='#aabfca' />}
				{turn === 'o' && <IconO width='1.4em' height='1em' color='#aabfca' />}
				<p>TURN</p>
			</div>
			<button className='bg-gray w-14 h-14 flex items-center justify-center rounded shadow-2'>
				<IconReset width='1em' height='1em' color='#1a2b33' />
			</button>
		</div>
	)
}
