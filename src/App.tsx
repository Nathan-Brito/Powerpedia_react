import { Input } from "./components/ui/input";
import React, { useState, useEffect } from 'react';
import { supabase } from './api/supabase';
import Pericias from './components/Pericias';
import Vantagens from './components/Vantagens';
import Desvantagens from './components/Desvantagens';


export interface Pericia {
  id: number;
  titulo: string;
  descricao: string;
}

export interface Vantagem {
  id: number;
  custo: string;
  titulo: string;
  descricao: string;
}

export interface Desvantagem {
    id: number;
    ganho: string;
    titulo: string;
    descricao: string;
}

interface BuscaInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const BuscaInput: React.FC<BuscaInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      type="text"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export const useDataFetch = () => {
  const [pericias, setPericias] = useState<Pericia[]>([]);
  const [vantagens, setVantagens] = useState<Vantagem[]>([]);
  const [desvantagens, setDesvantagens] = useState<Desvantagem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchPericias = async () => {
    const { data, error } = await supabase
      .from("pericias")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Erro ao buscar Pericias", error);
    } else {
      setPericias(data || []);
    }
  };

  const fetchVantagens = async () => {
    const { data, error } = await supabase
      .from("vantagens")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Erro ao buscar Vantagens", error);
    } else {
      setVantagens(data || []);
    }
  };

  const fetchDesvantagens = async () => {
    const { data, error } = await supabase
      .from("desvantagens")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Erro ao buscar Desvantagens", error);
    } else {
      setDesvantagens(data || []);
    }
  };

  useEffect(() => {
    fetchPericias();
    fetchVantagens();
    fetchDesvantagens();
  }, []);

  const filteredPericias = pericias.filter((pericia) =>
    pericia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredVantagens = vantagens.filter((vantagem) =>
    vantagem.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDesvantagens = desvantagens.filter((desvantagem) =>
    desvantagem.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    pericias: filteredPericias,
    vantagens: filteredVantagens,
    desvantagens: filteredDesvantagens,
    searchTerm,
    setSearchTerm,
  };
};

const App: React.FC = () => {
  const { pericias, vantagens, desvantagens, searchTerm, setSearchTerm } = useDataFetch();
  
  return (
    <div className="container">
      <p className="text-center mt-5 smooch-sans-titulo">Powerpedia</p>
      <p className="text-center mb-5">Aqui você fica mais forte!</p>

      <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="row pericias">
        {pericias.map((pericia) => (
          <Pericias key={pericia.id} pericias={pericia} />
        ))}
      </div>

      <div className="row vantagens">
        {vantagens.map((vantagem) => (
          <Vantagens key={vantagem.id} vantagens={vantagem} />
        ))}
      </div>

      <div className="row desvantagens">
        {desvantagens.map((desvantagem) => (
          <Desvantagens key={desvantagem.id} desvantagens={desvantagem} />
        ))}
      </div>
    </div>
  );
};

export function PagPericias() {
  const { pericias, searchTerm, setSearchTerm } = useDataFetch();

  return (
      <div className="container">
        <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="row pericias">
        {pericias.map((pericia) => (
          <Pericias key={pericia.id} pericias={pericia} />
        ))}
      </div>
      </div>
  )
}
export function PagVantagens() {
  const { vantagens, searchTerm, setSearchTerm } = useDataFetch();
  return (
      <div className="container">
          <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="row vantagens">
          {vantagens.map((vantagem) => (
            <Vantagens key={vantagem.id} vantagens={vantagem} />
          ))}
        </div>
      </div>
  )
}
export function PagDesvantagens() {
  const { desvantagens, searchTerm, setSearchTerm } = useDataFetch();
  return (
      <div className="container">
        <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="row desvantagens">
        {desvantagens.map((desvantagem) => (
          <Desvantagens key={desvantagem.id} desvantagens={desvantagem} />
        ))}
      </div>
      </div>
  )
}
export function PagArquetipos() {
  return (
      <p className="text-orage-500">Conteudo dos Arquetipos</p>
  )
}
export function PagFavoritos() {
  return (
      <p className="text-orage-500">Conteudo dos Favoritos</p>
  )
}

export default App;