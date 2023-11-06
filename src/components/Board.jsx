import { useState } from 'react'
import Square from './Square'
import IconX from '../icons/IconX'
import IconO from '../icons/IconO'

const initialState = Array(9).fill(null)

export const Board = ({ turn, updateTurn }) => {
	const [board, setBoard] = useState(initialState)

	const updateBoard = (index) => {
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		updateTurn(turn)
	}

	console.log(turn)
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
