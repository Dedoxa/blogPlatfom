import { createContext, useContext, useEffect, useState } from 'react';
import { Tag } from 'antd';

export const tagsContext = createContext({});

export const TagsContextProvider = ({ children }) => {
  const [tag, settag] = useState({});
  async function gettags() {
    return await fetch('https://api.themoviedb.org/3/genre/movie/list', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjFmZDIyODcxYTY2ZTc5ZTljMDdmZWU0YjQ5ODgzMiIsIm5iZiI6MTcyOTMzMzg0NS4xMDU2MzcsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LKst-viNQJT5PBru30LlOAPFv8scKBHhSX0J9ilYvCg',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error: ', response.status);
        }
      })
      .then((response) => response.tags)
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    gettags().then((data) => {
      const dictionary = {};

      for (const item of data) {
        dictionary[item.id] = item.name;
      }

      settag(dictionary);
    });
  }, []);
  return <tagsContext.Provider value={tag}>{children}</tagsContext.Provider>;
};

export const Tags = ({ ids }) => {
  const tags = useContext(tagsContext);
  return (
    <>
      {ids.map((id) => {
        return (
          <Tag key={id} className="tag">
            {tags[id]}
          </Tag>
        );
      })}
    </>
  );
};
