import { useState, useEffect } from 'react'
import { TURNS, initialResults, initialState } from '../constants/constants'
import {
	checkWinner,
	checkEndGame,
	getRandomEmptyIndex,
	getPossibleMoves,
} from '../components/logic/board'

export const UseCpuBoard = (gameMode) => {
	const [board, setBoard] = useState(initialState)
	const [winner, setWinner] = useState(null)

	const [turn, setTurn] = useState(TURNS.X)
	const [results, setResults] = useState(initialResults)

	useEffect(() => {
		if (turn === TURNS.O && winner === null && gameMode === 'easy') {
			const delay = setTimeout(() => {
				const emptyIndex = getRandomEmptyIndex(board)
				updateBoard(emptyIndex, TURNS.O)
				clearTimeout(delay)
			}, 500)
		}

		if (turn === TURNS.O && winner === null && gameMode === 'hard') {
			const delay = setTimeout(() => {
				const bestMove = getBestMove(board)
				updateBoard(bestMove, TURNS.O)
				clearTimeout(delay)
			}, 500)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [turn, winner, board])

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

	const getBestMove = (board) => {
		return minmax(board, TURNS.O).index
	}

	const minmax = (board, currentPlayer) => {
		const emptySquares = getPossibleMoves(board)
		const winner = checkWinner(board)

		if (winner === TURNS.X) {
			return { score: -10 }
		} else if (winner === TURNS.O) {
			return { score: 10 }
		} else if (emptySquares.length === 0) {
			return { score: 0 }
		}

		const moves = []

		for (let i = 0; i < emptySquares.length; i++) {
			const move = {}
			move.index = emptySquares[i]

			board[emptySquares[i]] = currentPlayer

			if (currentPlayer === TURNS.O) {
				const result = minmax(board, TURNS.X)
				move.score = result.score
			} else {
				const result = minmax(board, TURNS.O)
				move.score = result.score
			}

			board[emptySquares[i]] = null

			moves.push(move)
		}

		let bestMove
		if (currentPlayer === TURNS.O) {
			let bestScore = -10000
			for (let i = 0; i < moves.length; i++) {
				if (moves[i].score > bestScore) {
					bestScore = moves[i].score
					bestMove = i
				}
			}
		} else {
			let bestScore = 10000
			for (let i = 0; i < moves.length; i++) {
				if (moves[i].score < bestScore) {
					bestScore = moves[i].score
					bestMove = i
				}
			}
		}

		return moves[bestMove]
	}

	return { board, updateBoard, winner, turn, results, resetGame }
}
