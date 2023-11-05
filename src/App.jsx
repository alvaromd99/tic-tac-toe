import './App.css'
import Square from './components/Square'
/* import { IconO } from './icons/IconO'
import { IconX } from './icons/IconX' */

function App() {
	const board = Array(9).fill(null)
	return (
		<div className='bg-darkBlue min-h-screen flex items-center justify-center'>
			<div className='grid grid-cols-3 gap-8'>
				{board.map((sq, index) => (
					<Square key={index}>
						{/* <IconX width='7em' height='7em' color='#31c6be' /> */}
						{/* <IconO width='7em' height='7em' color='#f2b136' /> */}
					</Square>
				))}
			</div>
		</div>
	)
}

export default App
