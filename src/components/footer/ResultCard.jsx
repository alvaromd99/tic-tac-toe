export default function ResultCard({ index, resultCont }) {
	const classNames = ['bg-primary', 'bg-gray', 'bg-secondary']
	const className = classNames[index] || ''

	return (
		<div
			className={`${className} w-40 h-20 flex flex-col items-center justify-center rounded-lg`}>
			<p>You</p>
			<span className='text-2xl font-bold'>{resultCont}</span>
		</div>
	)
}
