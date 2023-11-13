import './App.css'
import { GameSelector } from './components/selector/GameSelector'
import { PlayerMode } from './components/gameModes/PlayerMode'
import { CpuMode } from './components/gameModes/CpuMode'
import { useContext } from 'react'
import { GameContext } from './context/GameContext'

function App() {
	const { gameMode } = useContext(GameContext)
	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			{gameMode === null && <GameSelector />}
			{gameMode === 'player' && <PlayerMode />}
			{(gameMode === 'easy' || gameMode === 'hard') && <CpuMode />}
		</div>
	)
}

export default App
