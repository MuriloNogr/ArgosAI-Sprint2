import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const SearchBarByName = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            // Naviga para a rota específica para busca por nome
            navigate(`/produtos/nome/${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar produto por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>
        </form>
    );
};

export default SearchBarByName;
