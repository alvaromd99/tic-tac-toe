import PropTypes from 'prop-types'

export default function IconReset({ width, height, color, ...restProps }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 32 32'
			{...restProps}>
			<path
				fill={color}
				d='M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z'
			/>
		</svg>
	)
}

IconReset.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}