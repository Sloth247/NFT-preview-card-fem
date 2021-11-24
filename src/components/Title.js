import "./Title.scss";

export default function Title() {
  const url = "#";
  return (
    <div>
      <h1 aria-hidden="true" className="hidden-title">
        Equilibrium
      </h1>
      <a href={url} className="title">
        Equilibrium #3429
      </a>
    </div>
  );
}
