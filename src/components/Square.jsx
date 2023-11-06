import PropTypes from 'prop-types'

export default function Square({ children, updateBoard, index }) {
	return (
		<div
			onClick={() => updateBoard(index)}
			className='w-40 h-40 bg-squareColor rounded-lg flex items-center justify-center'>
			{children}
		</div>
	)
}

Square.propTypes = {
	children: PropTypes.node,
	updateBoard: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
}
