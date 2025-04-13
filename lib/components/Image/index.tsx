import { FC, ImgHTMLAttributes, memo, useState } from "react";
import { cn } from "../../utils/cn";

export interface _ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt?: string;
	className?: string;
	isZoom?: boolean;
}

const Image: FC<_ImageProps> = ({
	src,
	alt = "",
	className,
	isZoom,
	...props
}) => {
	const [isError, setIsError] = useState(false);

	return (
		<>
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
		</>
	);
};

export default memo(Image);
