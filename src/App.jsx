// /src/App.jsx
import "./assets/styles/styles.scss";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Pericias from "./components/Pericias";
import Vantagens from "./components/Vantagens";

function App() {

  const [pericias, setPericias] = useState([]);
  const [vantagens, setVantagens] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPericias = async () => {
    const { data, error } = await supabase
    .from('Pericias')
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
    .from('Vantagens')
    .select('*')
    .order('id', { ascending: true });

    if (error) {
      console.error('Erro ao buscar Vantagens', error);
    } else {
      setVantagens(data);
    }
  }

  useEffect(() => {
    fetchPericias();
    fetchVantagens();
  }, []);

  const filteredPericias = pericias.filter((pericia) =>
    pericia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredVantagens = vantagens.filter((vantagens) =>
    vantagens.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar/>
      <h1 className="text-center mt-5 logo">Powerpedia</h1>
      <h5 className="text-center mt-2 mb-5 logo">Aqui você fica mais forte!</h5>
      
      <input
        type="text"
        placeholder="Buscar..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredPericias.map((pericias) => (
          <Pericias
            key={pericias.id}
            pericias={pericias} />
        ))}
      </div>

      <div className="row">
        {filteredVantagens.map((vantagens) => (
          <Vantagens
            key={vantagens.id}
            vantagens={vantagens} />
        ))}
      </div>
    </div>
  );
}

export default App;
