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
