function AmiiboCard({ amiibo }) {
  return (
    <div className="amiibo-card">
      <img src={amiibo.image} aria-hidden="true" alt="" />
      <div>
        <p>
          <span className="amiibo-card-name">{amiibo.character}</span>
          <br />
          {amiibo.amiiboSeries}
          <br />
          {amiibo.release.na}
        </p>
      </div>
    </div>
  );
}

export default AmiiboCard;
