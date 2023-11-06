import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import { IconO } from './icons/IconO'
import { IconX } from './icons/IconX'

const TURNS = {
	X: 'x',
	O: 'o',
}

const initialState = Array(9).fill(null)

function App() {
	const [board, setBoard] = useState(initialState)

	const updateBoard = (index) => {
		const newBoard = board
		newBoard[index] = 'x'
		setBoard(newBoard)
	}

	console.log(board)

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='grid grid-cols-3 gap-8'>
				{board.map((sq, index) => (
					<Square key={index} onClick={() => updateBoard(index)}>
						{board[index] === 'x' && (
							<IconX width='7em' height='7em' color='#31c6be' />
						)}
						{board[index] === 'o' && (
							<IconO width='7em' height='7em' color='#f2b136' />
						)}
					</Square>
				))}
			</div>
		</div>
	)
}

export default App
