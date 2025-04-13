import { FC, memo, useState } from "react";
import { cn } from "../../utils/cn";

export interface _ImageProps {
	src: string;
	alt?: string;
	className?: string;
	isZoom?: boolean;
}

interface ImageProps extends _ImageProps {
	classNames?: ImageClassNames;
}

interface ImageClassNames {
	container?: string;
}

const Image: FC<ImageProps> = ({
	src,
	alt = "",
	className,
	isZoom,
	classNames,
}) => {
	const [isError, setIsError] = useState(false);

	return (
		<div
			className={cn(
				"w-fit h-fit overflow-hidden rounded-md",
				classNames?.container,
			)}
		>
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className={cn(
					"inline-block transition",
					{
						"hover:scale-120 cursor-pointer": isZoom,
					},
					className,
				)}
				onError={() => setIsError(true)}
			/>

			{isError && (
				<div className="text-sm text-danger font-medium">
					Failed to load image.
				</div>
			)}
		</div>
	);
};

export default memo(Image);
