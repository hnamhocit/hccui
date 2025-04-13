import { FC, memo } from "react";
import { _ImageProps } from "../Image";
import Flex from "../Flex";
import Text from "../Text";
import Link from "../Link";
import Avatar from "../Avatar";
import { cn } from "../../utils/cn";

interface UserProps extends _ImageProps {
	name: string;
	bio: string;
	isLinkBio?: boolean;
	classNames?: UserClassNames;
}

interface UserClassNames {
	container?: string;
	name?: string;
	bio?: string;
}

const User: FC<UserProps> = ({
	name,
	bio,
	isLinkBio,
	classNames,
	...props
}) => {
	const { color, ...restProps } = props;

	return (
		<Flex items="center" gap={3} className={classNames?.container}>
			<Avatar
				{...restProps}
				color={
					color as
						| "default"
						| "primary"
						| "secondary"
						| "warn"
						| "danger"
						| "success"
				}
			/>

			<div>
				<Text
					style="bold"
					className={cn(
						"line-clamp-1 leading-none",
						classNames?.name,
					)}
				>
					{name}
				</Text>

				{isLinkBio ? (
					<Link
						isUnderlined
						href={bio}
						target="_blank"
						className={classNames?.bio}
					>
						{bio}
					</Link>
				) : (
					<Text
						role="caption"
						className={cn("line-clamp-1", classNames?.bio)}
					>
						{bio}
					</Text>
				)}
			</div>
		</Flex>
	);
};

export default memo(User);
