import React from "react";
import AmiiboCard from "./amiibo-card";

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
