import { PaginationContainer } from "./styles";

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: IPaginationProps) => {
    const generatePageNumbers = () => {
        const pageNumbers: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage > 2) pageNumbers.push(1);
            if (currentPage > 3) pageNumbers.push("...");

            if (currentPage - 1 > 0) pageNumbers.push(currentPage - 1);
            pageNumbers.push(currentPage);

            if (currentPage + 1 <= totalPages) pageNumbers.push(currentPage + 1);

            if (currentPage < totalPages - 2) pageNumbers.push("...");

            if (!pageNumbers.includes(totalPages)) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <PaginationContainer>
            {generatePageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (typeof page === "number") {
                            onPageChange(page);
                        }
                    }}
                    className={page === currentPage ? "active" : ""}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
        </PaginationContainer>
    );
};

export default Pagination;
