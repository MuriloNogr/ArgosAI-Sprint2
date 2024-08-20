import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductResults = () => {
    const { nome } = useParams();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get(`/api/produtos/buscar`, { params: { nome } })
            .then(response => setProdutos(response.data))
            .catch(error => console.error('Error fetching produtos:', error));
    }, [nome]);

    return (
        <div>
            <h1>Resultados da Busca por: {nome}</h1>
            {produtos.length > 0 ? (
                <ul>
                    {produtos.map(produto => (
                        <li key={produto.id}>{produto.nome} - {produto.descricao}</li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductResults;
