import { Tag } from 'antd';

import classes from './Tags.module.scss';

export const Tags = ({ ids }) => {
  return (
    <>
      {ids.map((element, id) => {
        return (
          <Tag key={id} className={classes.tag}>
            {element}
          </Tag>
        );
      })}
    </>
  );
};
