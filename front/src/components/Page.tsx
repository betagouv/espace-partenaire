import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Page(props: { children: JSX.Element }) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export { Page };
