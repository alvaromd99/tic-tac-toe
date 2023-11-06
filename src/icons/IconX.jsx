export default function IconX({ width, height, color, ...restProps }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 12 12'
			{...restProps}>
			<path
				fill={color}
				d='M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z'
			/>
		</svg>
	)
}
