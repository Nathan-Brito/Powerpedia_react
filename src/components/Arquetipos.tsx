import { Arquetipo } from '@/App';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useFavoritos } from "@/context/FavoritosContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; 

interface ArquetipoProps {
  arquetipos: Arquetipo;
}

const Arquetipos: React.FC<ArquetipoProps> = ({ arquetipos }) => {
  const { favoritos, toggleFavorito } = useFavoritos();
      const isFavorito = favoritos.some((fav) => fav.item.titulo === arquetipos.titulo);
  return (
    <div>
      <Card className="relative -skew-x-1 sm:-skew-x-2 bg-[#fd00ac] shadow-[8px_8px_15px_rgba(0,0,0,0.3)] text-white max-w-[430px] w-full transition duration-300 transform hover:scale-105 hover:z-10">
        <CardHeader>
          <div className='flex justify-between items-center'>
            <CardTitle className='text-4xl'>{arquetipos.titulo}</CardTitle> 
            <button onClick={() => toggleFavorito(arquetipos, "Arquetipo")} className="flex items-center">
              <FontAwesomeIcon
                  icon={isFavorito ? faStar : faStarRegular} 
                  size={isFavorito ? "2x" : "1x"} 
                  className={isFavorito ? "text-[#ff853b] transform transition-all duration-200 scale-110" : "text-gray-500 transform transition-all duration-200 scale-100"}
                />
            </button>
          </div>
          <CardDescription className='text-white text-3xl'><i>{arquetipos.custo}</i></CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl'" dangerouslySetInnerHTML={{ __html: arquetipos.descricao }}></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Arquetipos;
