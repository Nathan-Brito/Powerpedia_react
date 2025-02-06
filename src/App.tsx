import { Input } from "./components/ui/input";
import React, { useState, useEffect } from 'react';
import { supabase } from './api/supabase';
import Pericias from './components/Pericias';
import Vantagens from './components/Vantagens';
import Desvantagens from './components/Desvantagens';
import Arquetipos from './components/Arquetipos';


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

export interface Arquetipo {
    id: number;
    custo: string;
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
  const [arquetipos, setArquetipos] = useState<Arquetipo[]>([]);
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

  const fetchArquetipos = async () => {
    const { data, error } = await supabase
      .from("arquetipos")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Erro ao buscar Arquetipos", error);
    } else {
      setArquetipos(data || []);
    }
  };

  useEffect(() => {
    fetchPericias();
    fetchVantagens();
    fetchDesvantagens();
    fetchArquetipos();
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
  const filteredArquetipos = arquetipos.filter((arquetipos) =>
    arquetipos.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    pericias: filteredPericias,
    vantagens: filteredVantagens,
    desvantagens: filteredDesvantagens,
    arquetipos: filteredArquetipos,
    searchTerm,
    setSearchTerm,
  };
};

const App: React.FC = () => {
  const { pericias, vantagens, desvantagens, arquetipos, searchTerm, setSearchTerm } = useDataFetch();
  
  return (
    <div className="p-4 md:p-6">
      <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pericias.map((pericia) => (
          <Pericias key={pericia.id} pericias={pericia} />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vantagens.map((vantagem) => (
          <Vantagens key={vantagem.id} vantagens={vantagem} />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {desvantagens.map((desvantagem) => (
          <Desvantagens key={desvantagem.id} desvantagens={desvantagem} />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {arquetipos.map((arquetipos) => (
          <Arquetipos key={arquetipos.id} arquetipos={arquetipos} />
        ))}
      </div>
    </div>
  );
};

export function PagPericias() {
  const { pericias, searchTerm, setSearchTerm } = useDataFetch();

  return (
      <div className="p-6">
        <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      <div className="p-6">
          <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      <div className="p-6">
        <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {desvantagens.map((desvantagem) => (
            <Desvantagens key={desvantagem.id} desvantagens={desvantagem} />
          ))}
        </div>
      </div>
  )
}
export function PagArquetipos() {
  const { arquetipos, searchTerm, setSearchTerm } = useDataFetch();
  return (
      <div className="p-6">
        <BuscaInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {arquetipos.map((arquetipos) => (
            <Arquetipos key={arquetipos.id} arquetipos={arquetipos} />
          ))}
        </div>
      </div>
  )
}
export function PagFavoritos() {
  return (
      <p className="text-orange-500">Conteudo dos Favoritos</p>
  )
}

export default App;