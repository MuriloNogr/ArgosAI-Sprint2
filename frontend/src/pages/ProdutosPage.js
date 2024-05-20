import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'; // Import the CSS file

const ProdutosPage = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('/api/produtos')
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the produtos!', error);
            });
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.descricao}
                        <Link to={`/produtos/${produto.id}`}>Ver</Link>
                        <Link to={`/produtos/${produto.id}/edit`}>Editar</Link>
                        <Link to={`/produtos/${produto.id}/delete`}>Excluir</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProdutosPage;
