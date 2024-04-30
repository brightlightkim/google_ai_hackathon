const LoadMoreDataBtn = ({ state, fetchDataFun, additionalParam }) => {
  if (state != null && state.totalDocs > state.results.length) {
    return (
      <button
        onClick={() =>
          fetchDataFun({
            ...additionalParam,
            page: state.page.page ? state.page.page + 1 : state.page + 1,
          })
        }
        className='test-dark-grey p-2 px-3 hover:bg-grey/30 rounded-md flex items-center gap-2'
      >
        Load More
      </button>
    );
  }
};

export default LoadMoreDataBtn;
