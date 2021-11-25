import "./Title.scss";

export default function Title() {
  const url = "#";
  return (
    <div>
      <h1 className="sr-only">Equilibrium 3429</h1>
      <a href={url} className="title">
        Equilibrium #3429
      </a>
    </div>
  );
}
