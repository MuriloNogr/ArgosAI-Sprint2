import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProdutoEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        quantidade: 0
    });

    useEffect(() => {
        fetch(`/api/produtos/${id}`)
            .then(response => response.json())
            .then(data => setProduto(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({
            ...produto,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
            .then(() => navigate(`/produtos/${id}`));
    };

    return (
        <div>
            <h1>Edit Produto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type="text" name="descricao" value={produto.descricao} onChange={handleChange} />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input type="number" name="quantidade" value={produto.quantidade} onChange={handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProdutoEditPage;
