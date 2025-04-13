import { FC, memo, ReactNode, useState } from "react";
import Tab from "./Tab";
import { cva, VariantProps } from "class-variance-authority";
import { colors } from "../../constants/colors";

interface ITab {
	label: ReactNode;
	content: ReactNode;
}

const activeTab = cva("absolute top-0 h-full rounded-md -z-10 transition-all", {
	variants: {
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
		color: "default",
	},
});

interface TabsProps extends VariantProps<typeof activeTab> {
	data: ITab[];
}

const Tabs: FC<TabsProps> = ({ data, color }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [x, setX] = useState(0);
	const [width, setWidth] = useState(0);

	return (
		<div className="space-y-2">
			<div className="relative flex rounded-md w-fit overflow-hidden border-gray-200 border shadow">
				{data.map((tab, index) => (
					<Tab
						setWidth={setWidth}
						setX={setX}
						index={index}
						setActiveIndex={setActiveIndex}
						activeIndex={activeIndex}
						key={index}
					>
						{tab.label}
					</Tab>
				))}

				<div
					className={activeTab({ color })}
					style={{
						width,
						left: x,
					}}
				></div>
			</div>

			<div>{data[activeIndex].content}</div>
		</div>
	);
};

export default memo(Tabs);
