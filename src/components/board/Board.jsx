import Square from './Square'
import IconX from '../../icons/IconX'
import IconO from '../../icons/IconO'

export default function Board({ board, updateBoard }) {
	return (
		<div className='grid grid-cols-3 gap-8'>
			{board.map((sq, index) => (
				<Square key={index} index={index} updateBoard={updateBoard}>
					{board[index] === 'x' && (
						<IconX width='7em' height='7em' color='#31c6be' />
					)}
					{board[index] === 'o' && (
						<IconO width='6em' height='6em' color='#f2b136' />
					)}
				</Square>
			))}
		</div>
	)
}
