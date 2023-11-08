export default function ResultCard({ index, resultCont }) {
	const resultNames = ['X (YOU)', 'DRAW', 'O CPU']
	const resultName = resultNames[index] || ''

	const classNames = ['bg-primary', 'bg-gray', 'bg-secondary']
	const className = classNames[index] || ''

	return (
		<div
			className={`${className} w-40 h-20 flex flex-col items-center justify-center rounded-lg shadow-2`}>
			<p>{resultName}</p>
			<span className='text-2xl font-bold'>{resultCont}</span>
		</div>
	)
}
