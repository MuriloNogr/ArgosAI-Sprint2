import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/ArgosLogo.png'; // Importe a imagem corretamente
import '../App.css';

const Menu = () => {
    const [searchId, setSearchId] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchId.trim()) {
            navigate(`/produtos/${searchId}`);
        }
    };

    return (
        <nav>
            <img src={logo} alt="Logo" className="LogoImage"/> {/* Use a variável 'logo' aqui */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/add">Adicionar Produto</Link></li>
            </ul>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Buscar produto por ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>
        </nav>
    );
};

export default Menu;
