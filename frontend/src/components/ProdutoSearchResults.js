import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import '../App.css';

const ProdutoSearchResults = () => {
    const { nome } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Função para buscar os produtos por nome
        const fetchProdutos = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/produtos/buscar?nome=${nome}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar produtos');
                }
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, [nome]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="DivLista">
            <h2>Resultados da Busca por: {nome}</h2>
            {produtos.length > 0 ? (
                <ul className="product-list">
                    {produtos.map((produto) => (
                        <div key={produto.id} className="product-card">
                            <h3>{produto.nome}</h3>
                            <p>Descrição: {produto.descricao || 'Sem descrição'}</p>
                            <p>Quantidade: {produto.quantidade}</p>
                            <Link to={`/produtos/${produto.id}`} className="product-link">Ver detalhes</Link>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProdutoSearchResults;
