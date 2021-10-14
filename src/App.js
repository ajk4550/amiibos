import { useState, useEffect } from "react";
import "./App.css";
import Amiibos from "./components/amiibos";

const API_BASE = "https://amiiboapi.com/api/";

function App() {
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    loadAmiibos();
  });

  const loadAmiibos = async () => {
    fetchAmiibos().then((data) => {
      setAmiibos(data.amiibo);
    });
  };

  const fetchAmiibos = async () => {
    const apiEndpoint = "/amiibo/?type=figure";
    const response = await fetch(`${API_BASE}${apiEndpoint}`);
    return response.json();
  };

  return <Amiibos amiibos={amiibos} />;
}

export default App;
