import { Pericia } from '@/App';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Button } from "@/components/ui/button";
import { useFavoritos } from "@/context/FavoritosContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; 

interface PericiasProps {
  pericias: Pericia;
}

const Pericias: React.FC<PericiasProps> = ({ pericias }) => {
  const { favoritos, toggleFavorito } = useFavoritos();
    const isFavorito = favoritos.some((fav) => fav.item.titulo === pericias.titulo);
  
  return (
    <div className='m-2'>
      <Card className="relative -skew-x-2 bg-[#fdbe00] shadow-[8px_8px_15px_rgba(0,0,0,0.3)] rounded-xl text-black max-w-[430px] w-full transition duration-300 transform hover:scale-105 hover:z-10">
        <CardHeader>
          <div className='flex justify-between items-center'>
            <CardTitle className='text-4xl'>{pericias.titulo}</CardTitle> 

            <button onClick={() => toggleFavorito(pericias, "Perícia")} className="flex items-center">
              <FontAwesomeIcon
                  icon={isFavorito ? faStar : faStarRegular} 
                  size={isFavorito ? "2x" : "1x"} 
                  className={isFavorito ? "text-[#ff853b] transform transition-all duration-200 scale-110" : "text-gray-500 transform transition-all duration-200 scale-100"}
                />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl" dangerouslySetInnerHTML={{ __html: pericias.descricao }}></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pericias;
