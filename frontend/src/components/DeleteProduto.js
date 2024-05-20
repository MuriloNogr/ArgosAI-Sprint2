import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const DeleteProduto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        axios.get(`/api/produtos/${id}`)
            .then(response => setProduto(response.data))
            .catch(error => console.error('Error fetching produto:', error));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`/api/produtos/${id}`)
            .then(() => navigate('/produtos'))
            .catch(error => console.error('Error deleting produto:', error));
    };

    if (!produto) return <div>Carregando...</div>;

    return (
        <div className="DivDelete">
            <h2>Deletar Produto</h2>
            <p>Tem certeza que deseja deletar o produto: {produto.nome}?</p>
            <button onClick={handleDelete}>Deletar</button>
            <br />
            <button onClick={() => navigate('/produtos')}>Cancelar</button>
        </div>
    );
};

export default DeleteProduto;
