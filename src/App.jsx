import './App.css'
import { useState } from 'react'
import { GameSelector } from './components/selector/GameSelector'
import { PlayerMode } from './components/gameModes/PlayerMode'
import { CpuMode } from './components/gameModes/CpuMode'

function App() {
	const [gameMode, setGameMode] = useState(null) // <- Null

	const changeGameMode = (mode) => {
		setGameMode(mode)
	}

	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			{gameMode === null && <GameSelector changeGameMode={changeGameMode} />}
			{gameMode === 'player' && <PlayerMode changeGameMode={changeGameMode} />}
			{(gameMode === 'easy' || gameMode === 'hard') && (
				<CpuMode gameMode={gameMode} changeGameMode={changeGameMode} />
			)}
		</div>
	)
}

export default App
