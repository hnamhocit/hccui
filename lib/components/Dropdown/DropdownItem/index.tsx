import { cva, VariantProps } from 'class-variance-authority'
import { HTMLMotionProps, motion } from 'motion/react'
import { FC, memo, ReactNode } from 'react'

import { colors } from '../../../constants/colors'
import { Color } from '../../../types'
import { cn } from '../../../utils/cn'

const getColorClass = (color: Color) => {
	return `${colors[color].text} ${colors[color].hover} hover:text-white`
}

const dropdownItem = cva(
	'transition-colors rounded-md p-2 w-full flex items-center justify-between gap-3',
	{
		variants: {
			color: {
				default: getColorClass('default'),
				primary: getColorClass('primary'),
				secondary: getColorClass('secondary'),
				warn: getColorClass('warn'),
				danger: getColorClass('danger'),
				success: getColorClass('success'),
			},
		},
		defaultVariants: {
			color: 'default',
		},
	},
)

interface DropdownItem
	extends Omit<HTMLMotionProps<'button'>, 'color'>,
		VariantProps<typeof dropdownItem> {
	shortcut?: string
}

const DropdownItem: FC<DropdownItem> = ({
	color,
	children,
	shortcut,
	...props
}) => {
	return (
		<motion.button
			whileHover={{ opacity: 0.7 }}
			whileTap={{ scale: 0.9 }}
			{...props}
			className={cn(dropdownItem({ color }), props.className)}>
			{children as ReactNode}

			{shortcut && (
				<span className='border p-1 rounded-md text-xs transition'>
					{shortcut}
				</span>
			)}
		</motion.button>
	)
}

export default memo(DropdownItem)
