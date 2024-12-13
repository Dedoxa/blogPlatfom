import { Pagination } from 'antd';

import classes from './Posts.module.scss';

const Posts = () => {
  return (
    <>
      <Pagination
        align="center"
        current={1}
        // pageSize={this._CardsPerPage}
        total={5}
        // onChange={this.handlePageChange}
        showSizeChanger={false}
        pageSizeOptions={[]}
        // showTotal={() => `Found ${totalResults} movies`}
        hideOnSinglePage={true}
      />
    </>
  );
};

export default Posts;
