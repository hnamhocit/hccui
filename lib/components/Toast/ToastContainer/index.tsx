import { useContext } from 'react'

import { ToastContext } from '../../../contexts'
import { Position } from '../../../types'
import { groupByPosition } from '../../../utils/groupByPosition'
import ToastGroup from '../ToastGroup'

const ToastContainer = () => {
	const { toasts } = useContext(ToastContext)
	const groupedToasts = groupByPosition(toasts)

	const renderGroupedToasts = () => {
		return Object.entries(groupedToasts).map(([position, toasts]) => (
			<ToastGroup
				key={position}
				toasts={toasts}
				position={position as Position}
			/>
		))
	}

	return renderGroupedToasts()
}

export default ToastContainer
