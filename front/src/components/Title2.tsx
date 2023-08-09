function Title2(props: { title: string; id?: string }) {
  const { title, id } = props;
  return (
    <h2 className="fr-mb-2v" id={id}>
      {title}
    </h2>
  );
}
export default Title2;
