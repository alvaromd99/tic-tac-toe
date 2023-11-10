export const BackBtn = ({ changeGameMode }) => {
	return (
		<div onClick={() => changeGameMode(null)} className='absolute top-4 left-4'>
			Back
		</div>
	)
}
