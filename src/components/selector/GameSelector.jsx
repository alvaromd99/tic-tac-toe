import { DisplayIcons } from '../../icons/DisplayIcons'
import { BtnSelector } from './BtnSelector'
import { gameModes } from '../../constants/constants'

export const GameSelector = ({ changeGameMode }) => {
	return (
		<div className=' flex flex-col items-center justify-center gap-8'>
			<DisplayIcons />
			<div className='flex flex-col items-center justify-center gap-4'>
				{Object.keys(gameModes).map((mode, index) => (
					<BtnSelector
						key={index}
						index={index}
						mode={gameModes[mode]}
						changeGameMode={changeGameMode}
					/>
				))}
			</div>
		</div>
	)
}
