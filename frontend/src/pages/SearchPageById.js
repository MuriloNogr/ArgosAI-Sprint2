import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const SearchPageByName = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/produtos/${searchTerm}`);
        }
    };

    return (
        <div className="search-page">
            <h1>Buscar Produto por ID</h1>
            <form className="searchbar" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Buscar produto por ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit"><FaSearch/></button>
            </form>
        </div>
    );
};

export default SearchPageByName;
