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
	X: 0,
	D: 0,
	O: 0,
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

const initialState = Array(9).fill(null)

function App() {
	const [board, setBoard] = useState(initialState)
	const [winner, setWinner] = useState(null)

	const [turn, setTurn] = useState(TURNS.X)
	const [results, setResults] = useState(initialResults)

	/* ----------------------------------------------------------------------- */
	const updateBoard = (index) => {
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn

		setBoard(newBoard)
		updateTurn(turn)

		const newWinner = checkWinner(newBoard)
		if (newWinner) {
			setWinner(newWinner)
			updateResults(newWinner)
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

	const resetGame = () => {
		setBoard(initialState)
		setWinner(null)
	}
	/* ----------------------------------------------------------------------- */

	const updateTurn = (turn) => {
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
	}

	const updateResults = (winner) => {
		setResults((prevResults) => ({
			...prevResults,
			X: winner === TURNS.X ? prevResults.X + 1 : prevResults.X,
			O: winner === TURNS.O ? prevResults.O + 1 : prevResults.O,
			D: winner === false ? prevResults.D + 1 : prevResults.D,
		}))
	}

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-4'>
				<Header turn={turn} resetGame={resetGame} />
				<Board board={board} updateBoard={updateBoard} />
				<Footer results={results} />
			</div>
		</div>
	)
}

export default App
