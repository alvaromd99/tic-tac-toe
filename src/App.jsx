import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Board from './components/board/Board'
import Footer from './components/footer/Footer'

const TURNS = {
	X: 'x',
	O: 'o',
}

const initialResults = {
	X: '0',
	D: '0',
	O: '0',
}

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

function App() {
	const [turn, setTurn] = useState(TURNS.X)
	const [winner, setWinner] = useState(null)
	const [results, setResults] = useState(initialResults)

	const updateTurn = (turn) => {
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
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
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-4'>
				<Header turn={turn} />
				<Board turn={turn} updateTurn={updateTurn} />
				<Footer results={results} />
			</div>
		</div>
	)
}

export default App
