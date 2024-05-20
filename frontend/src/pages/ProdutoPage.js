import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProdutoPage = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        fetch(`/api/produtos/${id}`)
            .then(response => response.json())
            .then(data => setProduto(data));
    }, [id]);

    if (!produto) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{produto.nome}</h1>
            <p>{produto.descricao}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <Link to={`/produtos/${id}/edit`}>Edit</Link>
            <Link to={`/produtos/${id}/delete`}>Delete</Link>
        </div>
    );
};

export default ProdutoPage;
