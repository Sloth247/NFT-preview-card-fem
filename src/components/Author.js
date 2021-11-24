import "./Author.scss";

import avatar from "../img/image-avatar.png";

export default function Author() {
  const url = "#";
  return (
    <div>
      <div className="author-container">
        <img src={avatar} alt="" aria-hidden="true" />
        <p className="author__name">
          Creation of{" "}
          <a href={url} className="author__name-link">
            Jules Wyvern
          </a>
        </p>
      </div>
    </div>
  );
}
