import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Amiibos from "./components/amiibos";

const API_BASE = "https://amiiboapi.com/api/";

const fetchFromApi = async (apiEndpoint) => {
  const response = await fetch(`${API_BASE}${apiEndpoint}`);
  return response.json();
};

function App() {
  const [amiibos, setAmiibos] = useState([]);

  const loadAmiibos = useCallback(() => {
    fetchFromApi("/amiibo/?type=figure").then((data) => {
      setAmiibos(data.amiibo);
    });
  }, []);

  useEffect(() => {
    loadAmiibos();
  }, [loadAmiibos]);

  return <Amiibos amiibos={amiibos} />;
}

export default App;
