import IconX from '../icons/IconX'
import IconO from '../icons/IconO'
import IconReset from '../icons/IconReset'

export const Header = ({ turn }) => {
	console.log(turn)
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center'>
				<IconX width='2em' height='2em' color='#31c6be' />
				<IconO width='1.6em' height='1.6em' color='#f2b136' />
			</div>
			<div className='w-40 h-14 bg-squareColor text-gray rounded flex items-center justify-center'>
				Turn X
			</div>
			<button className='bg-gray w-14 h-14 flex items-center justify-center rounded'>
				<IconReset width='1em' height='1em' color='#1a2b33' />
			</button>
		</div>
	)
}
