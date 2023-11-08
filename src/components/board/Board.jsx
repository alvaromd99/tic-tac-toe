import { useState } from 'react'
import Square from './Square'
import IconX from '../../icons/IconX'
import IconO from '../../icons/IconO'

const initialState = Array(9).fill(null)

const winPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Rows
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Columns
	[0, 4, 8],
	[2, 4, 6], // Diagonals
]

export default function Board({ turn, updateTurn }) {
	const [board, setBoard] = useState(initialState)
	const [winner, setWinner] = useState(null)

	const updateBoard = (index) => {
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn

		setBoard(newBoard)
		updateTurn(turn)

		const newWinner = checkWinner(newBoard)
		if (newWinner) {
			setWinner(newWinner)
			console.log(`El ganador es ${newWinner}`)
		}
	}

	const checkWinner = (board) => {
		for (const pattern of winPatterns) {
			const [a, b, c] = pattern

			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a]
			}
		}
		return null
	}

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
