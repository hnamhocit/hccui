import { FC, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IToast, ToastContext } from '../contexts'

interface ToastProviderProps {
	children: ReactNode
}

const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
	const [toasts, setToasts] = useState<IToast[]>([])

	const removeToast = (id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id))
	}

	const showToast = (data: Omit<IToast, 'id'>) => {
		const id = uuidv4()
		setToasts((prev) => [...prev, { ...data, id }])
	}

	return (
		<ToastContext.Provider value={{ showToast, removeToast, toasts }}>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastProvider
