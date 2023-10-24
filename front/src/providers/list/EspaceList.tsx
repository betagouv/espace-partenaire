import React from 'react';
import { useState } from 'react';
import { backendClient } from '../../clients/back-client';

type listType = Array<{ title: string; description: string }>;

export const EspaceList = () => {
  const [list, setList] = useState<listType>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await backendClient.getList();
        setList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
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
