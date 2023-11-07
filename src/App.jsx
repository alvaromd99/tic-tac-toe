import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Board from './components/board/Board'
import Footer from './components/footer/Footer'

const TURNS = {
	X: 'x',
	O: 'o',
}

const initialResults = {
	X: '0',
	D: '0',
	O: '0',
}

function App() {
	const [turn, setTurn] = useState(TURNS.X)
	const [winner, setWinner] = useState(null)
	const [results, setResults] = useState(initialResults)

	const updateTurn = (turn) => {
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
	}

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-4'>
				<Header turn={turn} />
				<Board turn={turn} updateTurn={updateTurn} />
				<Footer results={results} />
			</div>
		</div>
	)
}

export default App
