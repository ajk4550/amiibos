import "./Filters.css";

function Filters({ applyFilter, currentFilter }) {
  return (
    <div className="filters-container">
      <p>Filters:</p>
      <div>
        <label>
          <input
            type="radio"
            name="type"
            value="all"
            onChange={applyFilter}
            checked={currentFilter === "all"}
          />
          All Types
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="yarn"
            onChange={applyFilter}
            checked={currentFilter === "yarn"}
          />
          Yarn
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="card"
            onChange={applyFilter}
            checked={currentFilter === "card"}
          />
          Cards
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="figure"
            onChange={applyFilter}
            checked={currentFilter === "figure"}
          />
          Figures
        </label>
      </div>
    </div>
  );
}

export default Filters;
