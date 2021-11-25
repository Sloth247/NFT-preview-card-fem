import "./Title.scss";

export default function Title() {
  const url = "#";
  return (
    <div>
      <h1 className="sr-only">Equilibrium 3429</h1>
      <h2 className="title">
        <a href={url}>Equilibrium #3429</a>
      </h2>
    </div>
  );
}
