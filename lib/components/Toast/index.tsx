import { cva, VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion } from 'motion/react'
import { FC, memo, useContext, useEffect, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import { IToast, ToastContext } from '../../contexts'
import { cn } from '../../utils/cn'
import {
    generateBorderVariants, generateFlatVariants, generateLightVariants
} from '../../utils/variants'
import Button from '../Button'

const compoundVariants = [
	...generateBorderVariants(),
	...generateLightVariants(),
	...generateFlatVariants(),
]

const toast = cva(
	'p-2 border-t border-primary-flat shadow flex items-center gap-3',
	{
		variants: {
			variant: {
				default: 'text-white',
				light: '!bg-transparent',
				border: 'border-2',
				flat: '',
			},
			color: {
				default: 'bg-default',
				primary: 'bg-primary',
				secondary: 'bg-secondary',
				warn: 'bg-warn',
				danger: 'bg-danger',
				success: 'bg-success',
			},
			isRounded: {
				true: 'rounded-full',
				false: 'rounded-2xl',
			},
		},
		compoundVariants,
		defaultVariants: {
			color: 'default',
			variant: 'default',
			isRounded: false,
		},
	},
)

interface ToastProps extends Omit<IToast, 'color'>, VariantProps<typeof toast> {
	className?: string
	index: number
}

const Toast: FC<ToastProps> = ({
	id,
	content,
	color,
	position,
	icon,
	className,
	duration = 5000,
}) => {
	const [isShow, setIsShow] = useState(true)
	const { removeToast } = useContext(ToastContext)
	const timerRef = useRef<NodeJS.Timeout>(null)

	const handleRemoveToast = () => {
		setIsShow(false)
		setTimeout(() => removeToast(id), 500)
	}

	useEffect(() => {
		timerRef.current = setTimeout(() => handleRemoveToast(), duration)

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}
		}
	})

	return (
		<AnimatePresence>
			{isShow && (
				<motion.div
					initial={{
						opacity: 0,
						translateY: position?.includes('bottom') ? 8 : -8,
					}}
					animate={{
						opacity: 1,
						translateY: 0,
					}}
					exit={{
						opacity: 0,
						translateY: position?.includes('bottom') ? -8 : 8,
					}}
					className={cn(toast({ color }), className)}>
					{icon}

					{content}

					<Button
						variant='light'
						className='text-white'
						onClick={handleRemoveToast}
						isIconOnly>
						<FaTimes />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default memo(Toast)
