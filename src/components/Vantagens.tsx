import { Vantagem } from '@/App';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface VantagensProps {
  vantagens: Vantagem;
}

const Vantagens: React.FC<VantagensProps> = ({ vantagens }) => {
  return (
    <div>
      <Card className="relative -skew-x-3 bg-[#00fd90] shadow-[8px_8px_15px_rgba(0,0,0,0.3)] w-[420px] transition duration-300 transform hover:scale-105 hover:z-10">
        <CardHeader>
          <CardTitle className='text-4xl'>{vantagens.titulo}</CardTitle>
          <CardDescription className='text-3xl'><i>{vantagens.custo}</i></CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl'" dangerouslySetInnerHTML={{ __html: vantagens.descricao }}></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vantagens;
