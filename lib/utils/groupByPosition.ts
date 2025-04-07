import { IToast } from '../contexts/toast'

export const groupByPosition = (toasts: IToast[]) => {
	const groupedToasts: Record<string, IToast[]> = {}

	toasts.forEach((toast) => {
		if (toast.position) {
			if (!groupedToasts[toast.position]) {
				groupedToasts[toast.position] = []
			}
			groupedToasts[toast.position].push(toast)
		}
	})

	return groupedToasts
}
