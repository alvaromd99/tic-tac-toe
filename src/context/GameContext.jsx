import { createContext, useState } from 'react'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
	const [gameMode, setGameMode] = useState(null)

	const changeGameMode = (mode) => {
		setGameMode(mode)
	}
	return (
		<GameContext.Provider value={{ gameMode, changeGameMode }}>
			{children}
		</GameContext.Provider>
	)
}
