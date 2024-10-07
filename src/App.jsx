// /src/App.jsx
import "./assets/styles/styles.scss";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Pericias from "./components/Pericias";
import Vantagens from "./components/Vantagens";
import Desvantagens from "./components/Desvantagens";

function App() {

  const [pericias, setPericias] = useState([]);
  const [vantagens, setVantagens] = useState([]);
  const [desvantagens, setDesvantagens] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPericias = async () => {
    const { data, error } = await supabase
    .from('pericias')
    .select('*')
    .order('id', { ascending: true });

    if (error) {
      console.error('Erro ao buscar Pericias', error);
    } else {
      setPericias(data);
    }
  }

  const fetchVantagens = async () => {
    const { data, error } = await supabase
    .from('vantagens')
    .select('*')
    .order('id', { ascending: true });

    if (error) {
      console.error('Erro ao buscar Vantagens', error);
    } else {
      setVantagens(data);
    }
  }
  const fetchDesvantagens = async () => {
    const { data, error } = await supabase
    .from('desvantagens')
    .select('*')
    .order('id', { ascending: true });

    if (error) {
      console.error('Erro ao buscar Vantagens', error);
    } else {
      setDesvantagens(data);
    }
  }

  useEffect(() => {
    fetchPericias();
    fetchVantagens();
    fetchDesvantagens();
  }, []);

  const filteredPericias = pericias.filter((pericia) =>
    pericia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredVantagens = vantagens.filter((vantagens) =>
    vantagens.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDesvantagens = desvantagens.filter((desvantagens) =>
    desvantagens.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar/>
      <p className="text-center mt-5 logo">Powerpedia</p>
      <p className="text-center mb-5 sub-logo">Aqui você fica mais forte!</p>
      
      <input
        type="text"
        placeholder="Buscar..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row pericias">
        {filteredPericias.map((pericias) => (
          <Pericias
            key={pericias.id}
            pericias={pericias} />
        ))}
      </div>

      <div className="row vantagens">
        {filteredVantagens.map((vantagens) => (
          <Vantagens
            key={vantagens.id}
            vantagens={vantagens} />
        ))}
      </div>

      <div className="row desvantagens">
        {filteredDesvantagens.map((desvantagens) => (
          <Desvantagens
            key={desvantagens.id}
            desvantagens={desvantagens} />
        ))}
      </div>
    </div>
  );
}

export default App;
