
const Conteudo = () => {
    return (
            <div className="row">
                <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Este é um card básico usando Bootstrap.</p>
                    <button className="btn btn-primary">Clique aqui</button>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Mais um card estilizado com Bootstrap.</p>
                    <button className="btn btn-success">Outro botão</button>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Último card da fila!</p>
                    <button className="btn btn-danger">Botão final</button>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Conteudo
