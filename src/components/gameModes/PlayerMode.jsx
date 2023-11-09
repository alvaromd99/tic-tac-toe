import Header from '../header/Header'
import Board from '../board/Board'
import Footer from '../footer/Footer'
import { UseBoard } from '../../hooks/UseBoard'

export const PlayerMode = () => {
	const { turn, board, updateBoard, results, resetGame } = UseBoard()

	return (
		<div className='flex flex-col gap-4'>
			<Header turn={turn} resetGame={resetGame} />
			<Board board={board} updateBoard={updateBoard} />
			<Footer results={results} />
		</div>
	)
}
