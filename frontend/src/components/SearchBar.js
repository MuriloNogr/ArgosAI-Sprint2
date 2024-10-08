import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            // Verifica se o termo de busca é um número
            if (!isNaN(searchTerm)) {
                navigate(`/produtos/${searchTerm}`);
            } else {
                navigate(`/produtos/nome/${encodeURIComponent(searchTerm)}`);
            }
        }
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>
        </form>
    );
};

export default SearchBar;
