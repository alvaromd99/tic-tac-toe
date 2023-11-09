import './App.css'
import Header from './components/header/Header'
import Board from './components/board/Board'
import Footer from './components/footer/Footer'
import { UseBoard } from './hooks/UseBoard'

function App() {
	const { turn, board, updateBoard, results, resetGame } = UseBoard()

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
