import { DisplayIcons } from '../../icons/DisplayIcons'
import { BtnSelector } from './BtnSelector'
import { gameModes } from '../../constants/constants'

export const GameSelector = () => {
	return (
		<div className=' flex flex-col items-center justify-center gap-8'>
			<DisplayIcons />
			<div className='flex flex-col items-center justify-center gap-4'>
				{Object.keys(gameModes).map((mode, index) => {
					const btnNames = ['(VS CPU Easy)', '(VS CPU Hard)', '(VS PLAYER 2)']
					const btnName = btnNames[index] || ''
					const classNames = ['bg-primary', 'bg-primary', 'bg-secondary']
					const className = classNames[index] || ''

					return (
						<BtnSelector
							key={index}
							mode={gameModes[mode]}
							btnName={btnName}
							className={className}
						/>
					)
				})}
			</div>
		</div>
	)
}
