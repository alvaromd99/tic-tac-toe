import { useState } from 'react'
import { TURNS, initialResults, initialState } from '../constants/constants'
import { checkWinner, checkEndGame } from '../components/logic/board'

export const UseBoard = () => {
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
		setTurn(TURNS.X)
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
	return { board, updateBoard, winner, turn, results, resetGame }
}
