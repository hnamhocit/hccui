import { FC, ImgHTMLAttributes, memo, useState } from "react";
import { cn } from "../../utils/cn";

export interface _ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt?: string;
	className?: string;
	isZoom?: boolean;
	classNames?: ImageClassNames;
}

interface ImageClassNames {
	container?: string;
}

const Image: FC<_ImageProps> = ({
	src,
	alt = "",
	className,
	classNames,
	isZoom,
	...props
}) => {
	const [isError, setIsError] = useState(false);

	return (
		<div
			className={cn(
				"w-full h-full overflow-hidden",
				classNames?.container,
			)}
		>
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className={cn(
					"inline-block w-full h-full rounded-md transition",
					{
						"hover:scale-120 cursor-pointer": isZoom,
					},
					className,
				)}
				onError={() => setIsError(true)}
				{...props}
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
