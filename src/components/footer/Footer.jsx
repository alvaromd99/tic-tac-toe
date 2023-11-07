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

{
	/* <div className='w-40 h-16 bg-primary rounded-lg'>You</div>
<div className='w-40 h-16 bg-gray rounded-lg'>Draw</div>
<div className='w-40 h-16 bg-secondary rounded-lg'>Player 2</div> */
}
