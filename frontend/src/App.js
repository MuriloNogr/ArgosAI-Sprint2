import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProdutoList from './components/ProdutoList';
import ProdutoDetails from './components/ProdutoDetails';
import AddProduto from './components/AddProduto';
import UpdateProduto from './components/UpdateProduto';
import DeleteProduto from './components/DeleteProduto';
import SearchBar from './components/SearchBar';
import SearchPage from './pages/SearchPage';
import SearchByName from './components/SearchByName';
import ProdutoSearchResults from './components/ProdutoSearchResults';
import SearchPageByName from './pages/SearchPageByName';
import SearchPageById from './pages/SearchPageById';
import IaPage from './pages/IaPage';
import HistoricoPage from './pages/HistoricoPage';
import VenderPage from './pages/VenderPage';
import { FaHome, FaList, FaPlus, FaSearch } from 'react-icons/fa';
import './App.css';

function App() {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/"><FaHome /> Home</Link></li>
                        <li><Link to="/produtos"><FaList /> Listar Produtos</Link></li>
                        <li><Link to="/add"><FaPlus /> Adicionar Produto</Link></li>
                        <li><SearchBar /></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<ProdutoList />} />
                    <Route path="/produtos/:id" element={<ProdutoDetails />} />
                    <Route path="/add" element={<AddProduto />} />
                    <Route path="/update/:id" element={<UpdateProduto />} />
                    <Route path="/delete/:id" element={<DeleteProduto />} />
                    <Route path="/buscar" element={<SearchPage />} />
                    <Route path="/buscar/id" element={<SearchPageById />} />
                    <Route path="/buscar-nome" element={<SearchByName />} />
                    <Route path="/produtos/nome" element={<SearchPageByName />} />
                    <Route path="/produtos/nome/:nome" element={<ProdutoSearchResults />} />
                    <Route path="/ia" element={<IaPage />} />
                    <Route path="/historico" element={<HistoricoPage />} />
                    <Route path="/vender" element={<VenderPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
