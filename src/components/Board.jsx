import { useState } from 'react'
import Square from './Square'
import { IconX } from '../icons/IconX'
import { IconO } from '../icons/IconO'

const initialState = Array(9).fill(null)
const TURNS = {
	X: 'x',
	O: 'o',
}

export const Board = () => {
	const [board, setBoard] = useState(initialState)
	const [turn, setTurn] = useState(TURNS.X)

	const updateBoard = (index) => {
		const newBoard = board
		newBoard[index] = 'x'
		setBoard(newBoard)
	}

	return (
		<div className='grid grid-cols-3 gap-8'>
			{board.map((sq, index) => (
				<Square key={index} index={index} updateBoard={updateBoard}>
					{board[index] === 'x' && (
						<IconX width='7em' height='7em' color='#31c6be' />
					)}
					{board[index] === 'o' && (
						<IconO width='7em' height='7em' color='#f2b136' />
					)}
				</Square>
			))}
		</div>
	)
}
