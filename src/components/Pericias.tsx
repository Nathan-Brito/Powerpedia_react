import { Pericia } from '@/App';
import React from 'react';

interface PericiasProps {
  pericias: Pericia;
}

const Pericias: React.FC<PericiasProps> = ({ pericias }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{pericias.titulo}</h5>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: pericias.descricao }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Pericias;
