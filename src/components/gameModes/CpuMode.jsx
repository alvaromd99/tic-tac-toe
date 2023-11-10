import Header from '../header/Header'
import Board from '../board/Board'
import Footer from '../footer/Footer'
import { UseCpuBoard } from '../../hooks/UseCpuBoard'

export const CpuMode = ({ gameMode }) => {
	const { turn, board, updateBoard, results, resetGame } = UseCpuBoard(gameMode)

	return (
		<div className='flex flex-col gap-4'>
			<Header turn={turn} resetGame={resetGame} />
			<Board board={board} updateBoard={updateBoard} />
			<Footer results={results} />
		</div>
	)
}
