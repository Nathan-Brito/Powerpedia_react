import React, { createContext, useContext, useState, useEffect } from "react";

type Favorito = {
  item: any;
  categoria: string;
};

const FavoritosContext = createContext<{ 
  favoritos: Favorito[], 
  toggleFavorito: (item: any, categoria: string) => void 
}>({
  favoritos: [],
  toggleFavorito: () => {},
});

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<any[]>(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (item: any, categoria: string) => {
    setFavoritos((prev) => {
      const existe = prev.some((fav) => fav.item.titulo === item.titulo && fav.categoria === categoria);
  
      const novoFavoritos = existe
        ? prev.filter((fav) => !(fav.item.titulo === item.titulo && fav.categoria === categoria))
        : [...prev, { item, categoria }];
  
      localStorage.setItem("favoritos", JSON.stringify(novoFavoritos));
      return novoFavoritos;
    });
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
