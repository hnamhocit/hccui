import React, { FC, memo, ReactNode, useState } from 'react'

interface ITab {
	label: string
	content: ReactNode
}

interface TabsProps {
	data: ITab[]
}

const Tabs: FC<TabsProps> = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<>
			<div className='flex'>
				{data.map((tab, index) => (
					<button
						key={tab.label}
						onClick={() => setActiveIndex(index)}>
						{tab.label}
					</button>
				))}
			</div>

			{data[activeIndex].content}
		</>
	)
}

export default memo(Tabs)
