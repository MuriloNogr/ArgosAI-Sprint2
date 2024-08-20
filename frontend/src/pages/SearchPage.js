import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const SearchPage = () => {

    return (
        <div className="search-menu">
            <Link to="/buscar/id" className="card">
                <img src="/images/byid.svg" alt="Logo" className="card-image"/>
                <div className="card-caption">Buscar por ID</div>
            </Link>

            <Link to="/produtos/nome" className="card">
                <img src="/images/byname.svg" alt="Logo" className="card-image"/>
                <div className="card-caption">Buscar por nome</div>
            </Link>
        </div>
    );
};

export default SearchPage;
