import { useState } from 'react';

type listType = Array<{ title: string; description: string }>;

export const EspaceList = () => {
  const [list, setList] = useState<listType>([]);

  return (
    <div className="fr-container">
      <h1>Liste des applications</h1>
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
