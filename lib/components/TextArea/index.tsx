import { cva } from 'class-variance-authority'
import { ChangeEvent, FC, memo, TextareaHTMLAttributes, useRef } from 'react'

import { cn } from '../../utils/cn'
import {
    generateBorderVariants, generateFlatVariants, generateLightVariants
} from '../../utils/variants'

const compoundVariants = [
	...generateBorderVariants(),
	...generateLightVariants(),
	...generateFlatVariants(),
]

const textarea = cva('inline-block outline-none transition-colors', {
	variants: {
		size: {
			sm: 'py-1 px-2',
			md: 'py-2 px-4',
			lg: 'py-3 px-6',
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
		size: 'md',
		variant: 'default',
		isRounded: false,
	},
})

interface TextAreaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
	minRows?: number
	maxRows?: number
	onChange?: (v: string) => void
}

const TextArea: FC<TextAreaProps> = ({
	placeholder,
	className,
	value,
	onChange,
	minRows = 2,
	...otherProps
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const val = event.target.value

		if (val.startsWith(' ')) {
			return
		}
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto'
			textareaRef.current.style.height =
				textareaRef.current.scrollHeight + 'px'
		}

		if (onChange) onChange(val)
	}

	return (
		<textarea
			ref={textareaRef}
			rows={minRows}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			className={cn(textarea(), className)}
			{...otherProps}
		/>
	)
}

export default memo(TextArea)
