import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export const EspaceList = () => {
  const [list, setList] = useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/list')
      .then((response) => {
        setList(response.data);
      });
  }, []);

  return (
    <div className="EspaceList">
      <div>Hello world list</div>
      <ul>
        {list.map(
          (
            { title, description },
            index: any
          ) => (
            <li key={index}>
              {title} && {description}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default EspaceList;
