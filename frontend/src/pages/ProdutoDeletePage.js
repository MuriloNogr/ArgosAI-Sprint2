import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProdutoDeletePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/produtos/${id}`, {
            method: 'DELETE'
        })
            .then(() => navigate('/produtos'));
    }, [id, navigate]);

    return (
        <div className="DivDelete">
            <h1>Deleting...</h1>
        </div>
    );
};

export default ProdutoDeletePage;
