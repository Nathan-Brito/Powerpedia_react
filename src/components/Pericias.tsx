import { Pericia } from '@/App';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PericiasProps {
  pericias: Pericia;
}

const Pericias: React.FC<PericiasProps> = ({ pericias }) => {
  return (
    <div>
      <Card className="relative -skew-x-3 bg-[#fdbe00] shadow-[8px_8px_15px_rgba(0,0,0,0.3)] rounded-xl text-white w-[430px] transition duration-300 transform hover:scale-105 hover:z-10">
        <CardHeader>
          <CardTitle className='text-4xl'>{pericias.titulo}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl'" dangerouslySetInnerHTML={{ __html: pericias.descricao }}></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pericias;
