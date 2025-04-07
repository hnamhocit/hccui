import { Color, colors } from '../constants/colors'

export const generateBorderVariants = () =>
	Object.entries(colors).map(
		([color, { text, border }]) =>
			({
				variant: 'border',
				color: color as Color,
				className: `${border} ${text}`,
			} as const),
	)

export const generateLightVariants = () =>
	Object.entries(colors).map(
		([color, { text }]) =>
			({
				variant: 'light',
				color: color as Color,
				className: text,
			} as const),
	)

export const generateFlatVariants = () =>
	Object.entries(colors).map(
		([color, { flat, text }]) =>
			({
				variant: 'flat',
				color: color as Color,
				className: `${flat} ${text}`,
			} as const),
	)
