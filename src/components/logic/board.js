import { winPatterns } from '../../constants/constants'

export const checkWinner = (board) => {
	for (const pattern of winPatterns) {
		const [a, b, c] = pattern

		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a]
		}
	}
	return null
}

export const checkEndGame = (board) => {
	return board.every((square) => square !== null)
}

export const getPossibleMoves = (board) => {
	return board.reduce((moves, square, index) => {
		if (!square) {
			moves.push(index)
		}
		return moves
	}, [])
}

export const getRandomEmptyIndex = (board) => {
	const possibleMoves = getPossibleMoves(board)
	const randomIndex = Math.floor(Math.random() * possibleMoves.length)

	return possibleMoves[randomIndex]
}
