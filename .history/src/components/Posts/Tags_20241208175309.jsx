import { Tag } from 'antd';

export const Tags = ({ ids }) => {
  return (
    <>
      {ids.map((element, id) => {
        return (
          <Tag key={id} className="tag">
            {element[id]}
          </Tag>
        );
      })}
    </>
  );
};
