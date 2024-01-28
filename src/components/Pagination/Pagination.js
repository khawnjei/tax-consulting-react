import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, changePage, paginate }) => {

    return (
        <ReactPaginate
            previousLabel={`Previous`}
            nextLabel={`Next`}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"quomodo-pagination paginationBtns text-center"}
            previousLinkClassName={"prev"}
            nextLinkClassName={"next"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            breakLabel={'...'}
            breakClassName={'pginationBreak'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
        />
    );
};

export default Pagination;