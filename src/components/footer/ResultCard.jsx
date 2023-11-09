export default function ResultCard({ resultCont, resultName, className }) {
	return (
		<div
			className={`${className} w-40 h-20 flex flex-col items-center justify-center rounded-lg shadow-2`}>
			<p>{resultName}</p>
			<span className='text-2xl font-bold'>{resultCont}</span>
		</div>
	)
}
