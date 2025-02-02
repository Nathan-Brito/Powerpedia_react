import { Vantagem } from '@/App';
import React from 'react';

interface VantagensProps {
  vantagens: Vantagem;
}

const Vantagens: React.FC<VantagensProps> = ({ vantagens }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{vantagens.titulo}</h5>
          <p className="card-text"><i>{vantagens.custo}</i></p>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: vantagens.descricao }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Vantagens;
