import { cva, VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion } from 'motion/react'
import { FC, memo, ReactNode } from 'react'

import { cn } from '../../utils/cn'

const modal = cva('p-4 rounded-2xl w-md min-h-40 max-h-80 shadow-md bg-white')

interface ModalProps extends VariantProps<typeof modal> {
	children?: ReactNode
	isOpen: boolean
	onOpenChange: () => void
	className?: string
}

const Modal: FC<ModalProps> = ({
	children,
	isOpen,
	onOpenChange,
	className,
}) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					onClick={onOpenChange}
					initial={{ opacity: 0, translateY: 16 }}
					animate={{
						opacity: 1,
						translateY: 0,
					}}
					exit={{ opacity: 0, translateY: 16 }}
					className='fixed inset-0 z-[9999] flex items-center justify-center'>
					<div className='absolute -z-10 inset-0 bg-[rgba(0,0,0,.7)]'></div>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						className={cn(modal(), className)}>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default memo(Modal)
