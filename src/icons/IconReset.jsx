export default function IconReset({ width, height, color, ...restProps }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			{...restProps}>
			<path
				fill='none'
				stroke={color}
				strokeWidth='2'
				d='M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18a9 9 0 0 0 9-9m0-9v6h-6'
			/>
		</svg>
	)
}
