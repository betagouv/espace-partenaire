import Footer from './Footer';
import Header from './Header';

function Page(props: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export { Page };
