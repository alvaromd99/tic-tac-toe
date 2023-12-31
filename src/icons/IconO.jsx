export default function IconO({ width, height, color, ...restProps }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 1024 1024'
			{...restProps}>
			<path
				fill={color}
				d='M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5zm0-832q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-160.5T672.5 235T512 192z'
			/>
		</svg>
	)
}
