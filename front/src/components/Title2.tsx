import React from 'react';

function Title2(props: any) {
  const { title } = props;
  return (
    <React.Fragment>
      <h2 className="fr-h6">{title}</h2>
    </React.Fragment>
  );
}
export default Title2;
