import { cva, VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion } from 'motion/react'
import { Dispatch, FC, memo, SetStateAction } from 'react'

import { colors } from '../../constants/colors'
import { cn } from '../../utils/cn'

const radio = cva('inline-block relative shadow rounded-full', {
	variants: {
		size: {
			sm: 'w-4 h-4',
			md: 'w-6 h-6',
			lg: 'w-8 h-8',
		},
		color: {
			default: colors.default.bg,
			primary: colors.primary.bg,
			secondary: colors.secondary.bg,
			warn: colors.warn.bg,
			danger: colors.danger.bg,
			success: colors.success.bg,
		},
	},
	defaultVariants: {
		color: 'default',
		size: 'md',
	},
})

interface RadioProps extends VariantProps<typeof radio> {
	checked: boolean
	onChange: Dispatch<SetStateAction<boolean>>
	className?: string
	label?: string
}

const Radio: FC<RadioProps> = ({
	checked,
	onChange,
	size,
	color,
	label,
	className,
}) => {
	return (
		<div className='flex items-center gap-2 flex-wrap'>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => onChange((prev) => !prev)}
				className={cn(radio({ size, color }), className)}>
				<AnimatePresence>
					{checked && (
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 rounded-full bg-white'></motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			<div className='text-sm text-gray-700'>{label}</div>
		</div>
	)
}

export default memo(Radio)
