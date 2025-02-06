import { Arquetipo } from '@/App';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ArquetipoProps {
  arquetipos: Arquetipo;
}

const Arquetipos: React.FC<ArquetipoProps> = ({ arquetipos }) => {
  return (
    <div>
      <Card className="relative -skew-x-3 bg-[#fd00ac] shadow-[8px_8px_15px_rgba(0,0,0,0.3)] text-white w-[430px] transition duration-300 transform hover:scale-105 hover:z-10">
        <CardHeader>
          <CardTitle className='text-4xl'>{arquetipos.titulo}</CardTitle>
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
