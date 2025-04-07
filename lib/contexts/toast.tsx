import { createContext, ReactNode } from 'react'

import { Color, Position } from '../types'

export interface IToast {
	id: string
	content: ReactNode
	icon?: ReactNode
	duration?: number
	position?: Position
	color?: Color
}

interface ToastContextProps {
	removeToast: (id: string) => void
	showToast: (data: Omit<IToast, 'id'>) => void
	toasts: IToast[]
}

export const ToastContext = createContext<ToastContextProps>({
	removeToast: () => {},
	showToast: () => {},
	toasts: [],
})
