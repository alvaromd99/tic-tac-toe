import { useState } from 'react'
import './App.css'
import { Board } from './components/Board'
import { Header } from './components/Header'

const TURNS = {
	X: 'x',
	O: 'o',
}

function App() {
	const [turn, setTurn] = useState(TURNS.X)

	const updateTurn = (turn) => {
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
	}

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-6'>
				<Header turn={turn} />
				<Board turn={turn} updateTurn={updateTurn} />
			</div>
		</div>
	)
}

export default App
