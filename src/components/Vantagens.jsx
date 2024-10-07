import PropTypes from 'prop-types';

const Vantagens = ({ vantagens }) => {

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{vantagens.titulo}</h5>
                    <p className='card-text'><i>{vantagens.custo}</i></p>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: vantagens.descricao}}></p>
                </div>
            </div>
        </div>
    );
}

// Validação de props
Vantagens.propTypes = {
    vantagens: PropTypes.shape({
        id: PropTypes.number.isRequired,
        custo: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
    }).isRequired,
};

export default Vantagens;
