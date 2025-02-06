import { Desvantagem } from '@/App';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface DesvantagensProps {
  desvantagens: Desvantagem
}

const Desvantagens: React.FC<DesvantagensProps> = ({ desvantagens }) => {
  return (
    <div>
      <Card className="relative -skew-x-3 bg-[#fd0046] shadow-[8px_8px_15px_rgba(0,0,0,0.3)] text-white max-w-[420px] w-full transition duration-300 transform hover:scale-105 hover:z-10">
        <CardHeader>
          <CardTitle className='text-4xl'>{desvantagens.titulo}</CardTitle>
          <CardDescription className='text-white text-3xl'><i>{desvantagens.ganho}</i></CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl'" dangerouslySetInnerHTML={{ __html: desvantagens.descricao }}></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Desvantagens;
