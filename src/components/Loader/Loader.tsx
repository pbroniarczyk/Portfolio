import React from "react";

import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader mb-10">
      <span className="loader__item loader__item--first" />
      <span className="loader__item loader__item--second" />
    </div>
  );
}
