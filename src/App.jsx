import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Board from './components/board/Board'
import Footer from './components/footer/Footer'
import { checkWinner, checkEndGame } from './components/logic/board'
import { TURNS, initialResults, initialState } from './constants/constants'

function App() {
	const [board, setBoard] = useState(initialState)
	const [winner, setWinner] = useState(null)

	const [turn, setTurn] = useState(TURNS.X)
	const [results, setResults] = useState(initialResults)

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
		} else if (checkEndGame(newBoard)) {
			const draw = false
			setWinner(draw)
			updateResults(draw)
		}
	}

	const resetGame = () => {
		setBoard(initialState)
		setWinner(null)
	}

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
