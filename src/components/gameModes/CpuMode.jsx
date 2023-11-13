import Header from '../header/Header'
import Board from '../board/Board'
import Footer from '../footer/Footer'
import { UseCpuBoard } from '../../hooks/UseCpuBoard'
import { BackBtn } from './BackBtn'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const CpuMode = () => {
	const { gameMode } = useContext(GameContext)
	const { turn, board, updateBoard, results, resetGame } = UseCpuBoard(gameMode)

	return (
		<div className='flex flex-col gap-4'>
			<BackBtn />
			<Header turn={turn} resetGame={resetGame} />
			<Board board={board} updateBoard={updateBoard} />
			<Footer results={results} />
		</div>
	)
}
