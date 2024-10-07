import PropTypes from 'prop-types';

const Pericias = ({ pericias }) => {

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{pericias.titulo}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: pericias.descricao}}></p>
                </div>
            </div>
        </div>
    );
}

// Validação de props
Pericias.propTypes = {
    pericias: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
    }).isRequired,
};

export default Pericias;
