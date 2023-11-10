import './App.css'
import { useState } from 'react'
import { GameSelector } from './components/selector/GameSelector'
import { PlayerMode } from './components/gameModes/PlayerMode'
import { CpuMode } from './components/gameModes/CpuMode'

// TODO Make a back btn so we can go back to the menu and make cpu

function App() {
	const [gameMode, setGameMode] = useState('cpu') // <- Null

	const changeGameMode = (mode) => {
		setGameMode(mode)
	}

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			{gameMode === null && <GameSelector changeGameMode={changeGameMode} />}
			{gameMode === 'player' && <PlayerMode />}
			{gameMode === 'cpu' && <CpuMode />}
		</div>
	)
}

export default App
