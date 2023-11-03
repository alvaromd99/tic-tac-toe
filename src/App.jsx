import './App.css'
import Square from './components/Square'

function App() {
	const board = Array(9).fill(null)
	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='grid grid-cols-3 gap-8'>
				{board.map((sq, index) => (
					<Square key={index}>{index}</Square>
				))}
			</div>
		</div>
	)
}

export default App
