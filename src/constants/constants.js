export const TURNS = {
	X: 'x',
	O: 'o',
}

export const initialResults = {
	X: 0,
	D: 0,
	O: 0,
}

export const winPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Rows
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Columns
	[0, 4, 8],
	[2, 4, 6], // Diagonals
]

export const initialState = Array(9).fill(null)
