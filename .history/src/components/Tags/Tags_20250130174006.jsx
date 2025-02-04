import { Tag } from 'antd';

import classes from './Tags.module.scss';

const Tags = ({ tagsArray }) => {
  return (
    <>
      {tagsArray?.map((tagText, id) => {
        return (
          <Tag key={id} className={classes.tag}>
            {tagText}
          </Tag>
        );
      })}
    </>
  );
};

export default Tags;
