import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Amiibos from "./components/Amiibos";
import Filters from "./components/Filters";

const API_BASE = "https://amiibos-rest-api.herokuapp.com/api";

/**
 * Function for making an API Fetch to a given endpoint
 * @param {string} apiEndpoint - This is the API endpoint to hit. It will
 *   be concatenated with the API_BASE so you only need the relative endpoint.
 * @returns the response from the fetch (JSON).
 */
const fetchFromApi = async (apiEndpoint) => {
  const response = await fetch(`${API_BASE}${apiEndpoint}`);
  return response.json();
};

function App() {
  // State management
  const [amiibos, setAmiibos] = useState([]);
  // By default, we load the figures since those are the most interesting.
  const [currentFilter, setCurrentFilter] = useState("figure");
  const [isLoading, setLoadingState] = useState(false);

  /**
   * Function for loading the amiibos. This function will call the fetchFromApi
   *   function and handle setting the loading state.
   */
  const loadAmiibos = useCallback(() => {
    let apiEndpoint = "/amiibo/";
    // If we are applying a filter beyond 'all', we need to pass it as a param.
    if (currentFilter !== "all") {
      apiEndpoint += `?type=${currentFilter}`;
    }
    // Tells the app we're beginning to load data.
    setLoadingState(true);
    fetchFromApi(apiEndpoint).then((data) => {
      // Update the amiibos array in state and tell the app it is no longer loading.
      setAmiibos(data.amiibo);
      setLoadingState(false);
    });
  }, [currentFilter]);

  /**
   * This is being used to render an initial set of amiibos.
   */
  useEffect(() => {
    loadAmiibos();
  }, [loadAmiibos]);

  return (
    <div className="app-container">
      <Filters
        applyFilter={(e) => {
          setCurrentFilter(e.target.value);
        }}
        currentFilter={currentFilter}
      />
      {isLoading ? <p>Loading...</p> : <Amiibos amiibos={amiibos} />}
    </div>
  );
}

export default App;
