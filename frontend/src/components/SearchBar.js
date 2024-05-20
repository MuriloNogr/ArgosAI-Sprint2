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
            navigate(`/produtos/${searchTerm}`);
        }
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar produto por ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>
        </form>
    );
};

export default SearchBar;
