import React from "react";
import {Route, Routes} from 'react-router-dom'

// Import de Cliente
import Cliente from './pages/clientes'
import ClienteInfo from "./pages/clientes/clienteInfo/clienteInfo";
import CadastroCliente from "./pages/clientes/cadastroCliente";
import ModificarCliente from './components/listaClientes/modificarCliente/index'

// Import de Produto~
import Produtos from './pages/produtos'
import CadastroProduto from './pages/produtos/cadastroProduto'
import ModificarProduto from './components/listaProdutos/modificarProduto'

// Import de Serviço
import Servicos from './pages/servicos'
import CadastroServico from './pages/servicos/cadastroServico'
import ModificarServico from './components/listaServicos/modificarServico'

// Importando Pedido
import Pedido from './pages/pedido'

function App() {
  return (
    <>
      <Routes>
        {/* Clientes */}
        <Route path="/" element={<Cliente />} />
        <Route path="/cliente/:id" element={<ClienteInfo />} />
        <Route path="/cliente/cadastrar" element={<CadastroCliente />} />
        <Route path="/cliente/modificar/:id" element={<ModificarCliente />} />
        <Route path="/cliente/excluir/:id" element={<Cliente />} />
        {/* Produtos */}
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/cadastrar" element={<CadastroProduto />} />
        <Route path="/produto/modificar/:id" element={<ModificarProduto />} />

        {/* Serviços */}
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servico/cadastrar" element={<CadastroServico />} />
        <Route path="/servico/modificar/:id" element={<ModificarServico />} />

        {/* Pedidos */}
        <Route path="/pedido" element={<Pedido />} />
        
      </Routes>
    </>
  )
}

export default App;
