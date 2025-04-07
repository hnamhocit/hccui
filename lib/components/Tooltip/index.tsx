import { cva, VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion } from 'motion/react'
import { FC, memo, ReactNode, useState } from 'react'

import { cn } from '../../utils/cn'
import {
    generateBorderVariants, generateFlatVariants, generateLightVariants
} from '../../utils/variants'

const compoundVariants = [
	...generateBorderVariants(),
	...generateLightVariants(),
	...generateFlatVariants(),
]

const contentContainer = cva('absolute p-2 shadow rounded-2xl bg-white z-10', {
	variants: {
		position: {
			'top-left': 'bottom-full left-0',
			'top-right': 'bottom-full right-0',
			'bottom-left': 'top-full left-0',
			'bottom-right': 'top-full right-0',
			'top-center': 'bottom-full left-1/2 -translate-x-1/2',
			'right-center': 'top-1/2 -translate-x-1/2 left-full',
			'left-center': 'top-1/2 -translate-y-1/2 right-full',
			'bottom-center': 'top-full -translate-x-1/2 left-1/2',
		},
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
			false: 'rounded-md',
		},
	},
	compoundVariants,
	defaultVariants: {
		color: 'default',
		variant: 'default',
		position: 'top-center',
	},
})

interface TooltipProps extends VariantProps<typeof contentContainer> {
	children?: ReactNode
	content: ReactNode
	className?: string
}

const Tooltip: FC<TooltipProps> = ({
	children,
	content,
	className,
	position,
}) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className='relative w-fit'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<AnimatePresence>
				{isHover && (
					<motion.div
						animate={{
							opacity: 1,
							translateY: position?.includes('bottom') ? 8 : -8,
						}}
						exit={{ opacity: 0, translateY: 0 }}
						className={cn(
							contentContainer({ position }),
							className,
						)}>
						{content}
					</motion.div>
				)}
			</AnimatePresence>

			<div>{children}</div>
		</div>
	)
}

export default memo(Tooltip)
