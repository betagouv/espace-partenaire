import '../custom-style.css';

function Title2(props: { title: string; id?: string }) {
  const { title, id } = props;
  return (
    <h2 className="fr-mb-4v  fr-mt-2v fr-mt-md-0 fr-pb-1v divider" id={id}>
      {title}
    </h2>
  );
}
export default Title2;
