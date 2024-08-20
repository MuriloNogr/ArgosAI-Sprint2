import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const Home = () => (
    <div className="DivHome">
        <div className="DivImage">
            <img src="/images/ArgosLogo.png" alt="Listar" className="LogoImage"/>
        </div>
        <h2>Bem-vindo ao sistema de gerenciamento de produtos</h2>
        <p>Use o menu para navegar entre as páginas.</p>

        <div className="mosaico">
            <Link to="/produtos" className="card">
                <img src="/images/Listar.svg" alt="Listar" className="card-image"/>
                <div className="card-caption">Listar produtos</div>
            </Link>

            <Link to="/add" className="card">
                <img src="/images/Add.svg" alt="Add" className="card-image"/>
                <div className="card-caption">Adicionar Produtos</div>
            </Link>

            <Link to="/buscar" className="card">
                <img src="/images/Buscar.svg" alt="Logo" className="card-image"/>
                <div className="card-caption">Buscar Produtos</div>
            </Link>
            <Link to="/vender" className="card">
                <img src="/images/sell.svg" alt="Logo" className="card-image"/>
                <div className="card-caption">Computar venda</div>
            </Link>
            <Link to="/ia" className="card">
                <img src="/images/ia.svg" alt="Logo" className="card-image"/>
                <div className="card-caption">Sugerir produtos com IA</div>
            </Link>
            <Link to="/historico" className="card">
                <img src="/images/history.svg" alt="Logo" className="card-image"/>
                <div className="card-caption">Consultar histórico de compras</div>
            </Link>
        </div>
    </div>

);

export default Home;
