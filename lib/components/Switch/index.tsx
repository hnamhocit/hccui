import React, { FC, memo } from 'react'

interface SwitchProps {
	children?: React.ReactNode
	className?: string
}

const Switch: FC<SwitchProps> = ({ children, className }) => {
	return <div>Switch</div>
}

export default memo(Switch)
