import ResultCard from './ResultCard'

export default function Footer({ results }) {
	return (
		<div className='flex items-center justify-between mt-2'>
			{Object.keys(results).map((result, index) => (
				<ResultCard key={result} index={index} resultCont={results[result]} />
			))}
		</div>
	)
}
