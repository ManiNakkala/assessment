// src/components/Pagination.js

const Pagination = ({currentPage, totalPages, onPageChange}) => {
  const handlePrevious = () => onPageChange(currentPage - 1)
  const handleNext = () => onPageChange(currentPage + 1)

  return (
    <div className="pagination">
      <button
        type="submit"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        type="submit"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
