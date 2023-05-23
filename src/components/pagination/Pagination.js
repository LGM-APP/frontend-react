import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const MAX_PAGE_NUMBERS = 5; // Nombre maximum de numéros de pages à afficher

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const getPageNumbers = () => {
		const pageNumbers = [];
		let startPage = Math.max(
			2,
			currentPage - Math.floor(MAX_PAGE_NUMBERS / 2)
		);
		let endPage = Math.min(startPage + MAX_PAGE_NUMBERS - 3, totalPages - 1);

		if (startPage > 2) {
			pageNumbers.push("...");
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}

		if (endPage < totalPages - 1) {
			pageNumbers.push("...");
		}

		return [1, ...pageNumbers, totalPages];
	};

	if (totalPages <= 1) {
		return null; // Ne rien rendre si le nombre de pages est inférieur ou égal à zéro
	}

	return (
		<div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
			<div className="hidden justify-center sm:flex" aria-label="Pagination">
				<ul className="flex items-center">
					<li>
						<button
							className={`hover:text-cyan-950 hover:bg-gray-100 px-2 py-3 border border-r-0 rounded-tl-lg rounded-bl-lg ${
								currentPage === 1
									? "pointer-events-none opacity-50"
									: ""
							}`}
							onClick={handlePreviousPage}
							disabled={currentPage === 1}
						>
							<span className="inline-flex flex-row-reverse items-center gap-x-2">
								Previous
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path
										fillRule="evenodd"
										d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</button>
					</li>
					{getPageNumbers().map((pageNumber, index) => (
						<li key={index}>
							{pageNumber === "..." ? (
								<span className="px-4 py-3 border border-l-0">...</span>
							) : (
								<button
									className={`px-4 py-3 border border-l-0 duration-150 hover:text-cyan-950 hover:bg-indigo-50 ${
										currentPage === pageNumber
											? "bg-indigo-50 text-cyan-950 font-medium"
											: ""
									}`}
									onClick={() => onPageChange(pageNumber)}
								>
									{pageNumber}
								</button>
							)}
						</li>
					))}
					<li>
						<button
							className={`hover:text-cyan-950 hover:bg-gray-100 px-2 py-3 border border-l-0 rounded-tr-lg rounded-br-lg ${
								currentPage === totalPages
									? "pointer-events-none opacity-50"
									: ""
							}`}
							onClick={handleNextPage}
							disabled={currentPage === totalPages}
						>
							<span className="inline-flex items-center gap-x-2">
								Next
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path
										fillRule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Pagination;
