import { PropsWithChildren } from 'react';

function Title1({ children }: PropsWithChildren) {
  return <h1 className="fr-my-10v">{children}</h1>;
}
export default Title1;
