import { Tag } from 'antd';

export const Tags = ({ ids }) => {
  return (
    <>
      {ids.map((id) => {
        return (
          <Tag key={id} className="tag">
            {ids[id]}
          </Tag>
        );
      })}
    </>
  );
};
