import axios from 'axios';
import React from 'react';
import { useState } from 'react';

type listType = Array<{ title: string; description: string }>;

export const EspaceList = () => {
  const [list, setList] = useState<listType>([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/list').then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <div className="fr-container">
      <div>Hello world list</div>
      <ul>
        {list.map(({ title, description }, index) => (
          <li key={index}>
            {title} && {description}
          </li>
        ))}
      </ul>
    </div>
  );
};
