import { cva, VariantProps } from 'class-variance-authority'
import { FC, memo } from 'react'

import Toast from '../'
import { IToast } from '../../../contexts/toast'
import { cn } from '../../../utils/cn'

const toastGroup = cva('fixed space-y-2 min-w-20 max-w-60 z-[9999]', {
	variants: {
		position: {
			'top-left': 'top-4 left-4',
			'top-right': 'top-4 right-4',
			'bottom-left': 'bottom-4 left-4',
			'bottom-right': 'bottom-4 right-4',
			'top-center': 'top-4 left-1/2 -translate-x-1/2',
			'right-center': 'top-1/2 -translate-y-1/2 right-4',
			'left-center': 'top-1/2 -translate-y-1/2 left-4',
			'bottom-center': 'bottom-4 -translate-x-1/2 left-1/2',
		},
	},
	defaultVariants: {
		position: 'top-right',
	},
})

interface ToastGroupProps extends VariantProps<typeof toastGroup> {
	toasts: IToast[]
	className?: string
}

const ToastGroup: FC<ToastGroupProps> = ({ toasts, className, position }) => {
	return (
		<div className={cn(toastGroup({ position }), className)}>
			{toasts.map((toast, index) => {
				return (
					<Toast
						key={toast.id}
						{...{ ...toast, index }}
					/>
				)
			})}
		</div>
	)
}

export default memo(ToastGroup)
