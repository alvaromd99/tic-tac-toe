import ResultCard from './ResultCard'

export default function Footer({ results }) {
	return (
		<div className='flex items-center justify-between mt-2'>
			{Object.keys(results).map((result, index) => {
				const resultNames = ['X (YOU)', 'DRAW', 'O CPU']
				const resultName = resultNames[index] || ''
				const classNames = ['bg-primary', 'bg-gray', 'bg-secondary']
				const className = classNames[index] || ''

				return (
					<ResultCard
						key={result}
						resultCont={results[result]}
						resultName={resultName}
						className={className}
					/>
				)
			})}
		</div>
	)
}
