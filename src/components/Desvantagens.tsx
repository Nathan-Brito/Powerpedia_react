import { Desvantagem } from '@/App';
import React from 'react';

interface DesvantagensProps {
  desvantagens: Desvantagem
}

const Desvantagens: React.FC<DesvantagensProps> = ({ desvantagens }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{desvantagens.titulo}</h5>
          <p className="card-text">
            <i>{desvantagens.ganho}</i>
          </p>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: desvantagens.descricao }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Desvantagens;
