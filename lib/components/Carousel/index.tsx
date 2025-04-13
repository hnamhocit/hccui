import React, {
	useState,
	useEffect,
	useRef,
	ReactNode,
	useCallback,
	memo,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { cn } from "../../utils/cn";

interface CarouselProps {
	items: ReactNode[];
	autoPlay?: boolean;
	interval?: number;
	showArrows?: boolean;
	showDots?: boolean;
	className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
	items,
	autoPlay = false,
	interval = 1000,
	showArrows = true,
	showDots = true,
	className,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const nextSlide = useCallback(() => {
		setDirection(1);
		setCurrentIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1,
		);
	}, [items]);

	const prevSlide = () => {
		setDirection(-1);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1,
		);
	};

	const goToSlide = (index: number) => {
		if (index > currentIndex) {
			setDirection(1);
		} else if (index < currentIndex) {
			setDirection(-1);
		}
		setCurrentIndex(index);
	};

	useEffect(() => {
		if (autoPlay) {
			timeoutRef.current = setTimeout(() => {
				nextSlide();
			}, interval);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [currentIndex, autoPlay, interval, nextSlide]);

	return (
		<div className={cn("relative w-full overflow-hidden", className)}>
			<div className="absolute inset-0">
				<AnimatePresence initial={false} mode="popLayout">
					{items.map((item, index) => {
						const isActive = index === currentIndex;
						if (!isActive) return null;

						return (
							<motion.div
								key={index}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
								}}
								transition={{ duration: 0.3 }}
								initial={{
									x: direction > 0 ? "100%" : "-100%",
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								exit={{
									x: direction > 0 ? "-100%" : "100%",
									opacity: 0,
								}}
							>
								{item}
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>

			{/* Arrows */}
			{showArrows && (
				<div className="absolute inset-0 flex items-center justify-between px-4">
					<Button
						isIconOnly
						onClick={prevSlide}
						aria-label="Previous slide"
					>
						<FaAngleLeft />
					</Button>

					<Button
						isIconOnly
						onClick={nextSlide}
						aria-label="Next slide"
					>
						<FaAngleRight />
					</Button>
				</div>
			)}

			{/* Dots */}
			{showDots && (
				<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
					{items.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full focus:outline-none ${
								currentIndex === index
									? "bg-white"
									: "bg-white/50 hover:bg-white/80"
							}`}
							onClick={() => goToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default memo(Carousel);
