// eslint-disable-next-line react/prop-types
export default function Square({ children }) {
	return (
		<div className='w-40 h-40 bg-squareColor rounded-lg flex items-center justify-center'>
			{children}
		</div>
	)
}
