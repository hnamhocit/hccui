import { FC, memo } from "react";
import Button from "../Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Color } from "../../constants/colors";

interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	onChangePage: (page: number) => void;
	color?: Color;
}

const Pagination: FC<PaginationProps> = ({
	itemsPerPage,
	totalItems,
	currentPage,
	onChangePage,
	color = "default",
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	return (
		<div className="flex items-center gap-2 justify-center">
			<Button
				disabled={currentPage === 1}
				isIconOnly
				color={color}
				onClick={() => onChangePage(currentPage - 1)}
			>
				<FaAngleLeft size={20} />
			</Button>

			{new Array(totalPages)
				.fill(null)
				.map((_, i) => i + 1)
				.filter((page) => {
					return (
						page >= Math.max(1, currentPage - 2) &&
						page <= Math.min(totalPages, currentPage + 2)
					);
				})
				.map((page) => (
					<Button
						variant={page === currentPage ? "default" : "flat"}
						color={color}
						key={page}
						onClick={() => onChangePage(page)}
						isRounded
					>
						{page}
					</Button>
				))}

			<Button
				disabled={currentPage === totalPages}
				isIconOnly
				color={color}
				onClick={() => onChangePage(currentPage + 1)}
			>
				<FaAngleRight size={20} />
			</Button>
		</div>
	);
};

export default memo(Pagination);
