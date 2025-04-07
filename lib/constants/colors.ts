export type Color =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'warn'
	| 'danger'
	| 'success'

interface IColor {
	bg: string
	flat: string
	text: string
	border: string
	hover: string
}

export const colors: Record<Color, IColor> = {
	default: {
		bg: 'bg-default',
		flat: 'bg-default-flat',
		text: 'text-default',
		border: 'border-default',
		hover: 'hover:bg-default-hover',
	},
	primary: {
		bg: 'bg-primary',
		flat: 'bg-primary-flat',
		text: 'text-primary',
		border: 'border-primary',
		hover: 'hover:bg-primary-hover',
	},
	secondary: {
		bg: 'bg-secondary',
		flat: 'bg-secondary-flat',
		text: 'text-secondary',
		border: 'border-secondary',
		hover: 'hover:bg-secondary-hover',
	},
	warn: {
		bg: 'bg-warn',
		flat: 'bg-warn-flat',
		text: 'text-warn',
		border: 'border-warn',
		hover: 'hover:bg-warn-hover',
	},
	danger: {
		bg: 'bg-danger',
		flat: 'bg-danger-flat',
		text: 'text-danger',
		border: 'border-danger',
		hover: 'hover:bg-danger-hover',
	},
	success: {
		bg: 'bg-success',
		flat: 'bg-success-flat',
		text: 'text-success',
		border: 'border-success',
		hover: 'hover:bg-success-hover',
	},
}
