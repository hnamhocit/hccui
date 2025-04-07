import { cva, VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion } from 'motion/react'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import { FaCheck } from 'react-icons/fa'

import { colors } from '../../constants/colors'
import { cn } from '../../utils/cn'

const checkbox = cva('flex items-center justify-center rounded-md', {
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

interface CheckboxProps extends VariantProps<typeof checkbox> {
	checked: boolean
	onChange: Dispatch<SetStateAction<boolean>>
	className?: string
	label?: string
}

const Checkbox: FC<CheckboxProps> = ({
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
				className={cn(checkbox({ size, color }), className)}>
				<AnimatePresence>
					{checked && (
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							className='text-white'>
							<FaCheck />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			<div className='text-sm text-gray-700'>{label}</div>
		</div>
	)
}

export default memo(Checkbox)
