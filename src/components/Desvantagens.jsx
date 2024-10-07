import PropTypes from 'prop-types';

const Desvantagens = ({ desvantagens }) => {

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{desvantagens.titulo}</h5>
                    <p className='card-text'><i>{desvantagens.ganho}</i></p>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: desvantagens.descricao}}></p>
                </div>
            </div>
        </div>
    );
}

// Validação de props
Desvantagens.propTypes = {
    desvantagens: PropTypes.shape({
        id: PropTypes.number.isRequired,
        ganho: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
    }).isRequired,
};

export default Desvantagens;
