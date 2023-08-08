function Title2(props: { title: string; id?: string }) {
  const { title, id } = props;
  return <h2 id={id}>{title}</h2>;
}
export default Title2;
