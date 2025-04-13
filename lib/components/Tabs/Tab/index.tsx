import { cva, VariantProps } from "class-variance-authority";
import {
	Dispatch,
	FC,
	HTMLAttributes,
	memo,
	SetStateAction,
	useEffect,
	useRef,
} from "react";
import { cn } from "../../../utils/cn";

const tab = cva("flex items-center gap-3 py-1 px-2 text-sm transition");

interface TabProps
	extends HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof tab> {
	setWidth: Dispatch<SetStateAction<number>>;
	setX: Dispatch<SetStateAction<number>>;
	setActiveIndex: Dispatch<SetStateAction<number>>;
	activeIndex: number;
	index: number;
}

const Tab: FC<TabProps> = ({
	className,
	index,
	setActiveIndex,
	setX,
	activeIndex,
	setWidth,
	...props
}) => {
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const ele = ref.current;
		if (ele && activeIndex === index) {
			setX(ele.offsetLeft);
			setWidth(ele.offsetWidth);
		}
	}, [activeIndex, index, setX, setWidth]);

	return (
		<button
			{...props}
			ref={ref}
			className={cn(
				tab(),
				index === activeIndex && "text-white font-medium",
				className,
			)}
			onClick={() => setActiveIndex(index)}
		/>
	);
};

export default memo(Tab);
