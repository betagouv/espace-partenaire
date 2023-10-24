import Header from '../header/Header';
import Footer from '../footer/Footer';
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
