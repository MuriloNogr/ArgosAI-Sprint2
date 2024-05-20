import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const UpdateProduto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        quantidade: ''
    });

    useEffect(() => {
        axios.get(`/api/produtos/${id}`)
            .then(response => setProduto(response.data))
            .catch(error => console.error('Error fetching produto:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/produtos/${id}`, produto)
            .then(() => navigate('/produtos'))
            .catch(error => console.error('Error updating produto:', error));
    };

    return (
        <div className="DivForm">
            <h2>Atualizar Produto</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <label>
                    Nome:
                    <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Descrição:
                    <input type="text" name="descricao" value={produto.descricao} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Quantidade:
                    <input type="number" name="quantidade" value={produto.quantidade} onChange={handleChange} />
                </label>
                <br />
                <button type="submit" className="product-button">Salvar</button>
            </form>
        </div>
    );
};

export default UpdateProduto;
