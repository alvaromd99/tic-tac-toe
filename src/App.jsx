import './App.css'
import { useState } from 'react'
import { GameSelector } from './components/selector/GameSelector'
import { PlayerMode } from './components/gameModes/PlayerMode'

function App() {
	const [gameMode, setGameMode] = useState(null)

	const changeGameMode = (mode) => {
		setGameMode(mode)
	}

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			{gameMode === null && <GameSelector changeGameMode={changeGameMode} />}
			{gameMode === 'player' && <PlayerMode />}
			{gameMode === 'cpu' && <h1>CPU MODE</h1>}
		</div>
	)
}

export default App
