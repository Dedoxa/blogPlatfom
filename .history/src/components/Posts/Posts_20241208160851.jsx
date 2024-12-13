import { Pagination } from 'antd';
import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <Pagination
              align="center"
              current={currentPage}
              pageSize={this._CardsPerPage}
              total={totalPages * this._CardsPerPage}
              onChange={this.handlePageChange}
              showSizeChanger={false}
              pageSizeOptions={[]}
              showTotal={() => `Found ${totalResults} movies`}
              hideOnSinglePage={true}
            />
    </>
  );
};

export default Posts;
