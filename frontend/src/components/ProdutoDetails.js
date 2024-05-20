import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProdutoDetails = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        axios.get(`/api/produtos/${id}`)
            .then(response => setProduto(response.data))
            .catch(error => console.error('Error fetching produto:', error));
    }, [id]);

    if (!produto) return <div>Carregando...</div>;

    return (
        <div className="DivDetails">
            <h2>Detalhes do Produto</h2>
            <p>Nome: {produto.nome}</p>
            <p>Descrição: {produto.descricao}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <Link to={`/update/${produto.id}`} className="product-link">Atualizar Produto</Link>
            <br />
            <Link to={`/delete/${produto.id}`} className="product-link">Deletar Produto</Link>
            <br />
            <Link to="/produtos" className="product-link">Voltar à lista de produtos</Link>
        </div>
    );
};

export default ProdutoDetails;
