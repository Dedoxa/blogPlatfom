import { Tag } from 'antd';

import classes from './Tags.module.scss';

export const Tags = ({ tagsArray }) => {
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
