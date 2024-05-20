import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const AddProduto = () => {
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        quantidade: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/produtos', produto)
            .then(() => navigate('/produtos'))
            .catch(error => console.error('Error adding produto:', error));
    };

    return (
        <div className="DivLista">
            <h2>Adicionar Produto</h2>
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

export default AddProduto;
