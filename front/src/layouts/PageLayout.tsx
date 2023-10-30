import Header from '../headers/Header';
import Footer from '../footers/Footer';
import React from 'react';

function PageLayout(props: { children: JSX.Element }) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export { PageLayout };
