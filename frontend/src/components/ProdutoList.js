import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('/api/produtos')
            .then(response => setProdutos(response.data))
            .catch(error => console.error('Error fetching produtos:', error));
    }, []);

    return (
        <div className="DivLista">
            <h2>Lista de Produtos</h2>
            <div className="product-list">
                {produtos.map(produto => (
                    <div key={produto.id} className="product-card">
                        <h1>{produto.id}</h1>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p>Quantidade: {produto.quantidade}</p>
                        <Link to={`/produtos/${produto.id}`} className="product-link">Ver detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProdutoList;
