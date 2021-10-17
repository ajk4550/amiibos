import React from "react";
import AmiiboCard from "./AmiiboCard";
import "./Amiibos.css";

function Amiibos({ amiibos }) {
  return (
    <div className="amiibos">
      {amiibos.map((amiibo, index) => (
        <AmiiboCard amiibo={amiibo} key={index} />
      ))}
    </div>
  );
}

export default Amiibos;
