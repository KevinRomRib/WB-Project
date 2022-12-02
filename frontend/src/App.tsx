import React from "react";
import {Route, Routes} from 'react-router-dom'

// Import de Cliente
import Cliente from './pages/clientes'
import ClienteInfo from "./pages/clientes/clienteInfo/clienteInfo";
import CadastroCliente from "./pages/clientes/cadastroCliente";
import ModificarCliente from './components/listaClientes/modificarCliente/index'
import CadRG from "./pages/clientes/cadastroRg";
import CadTel from "./pages/clientes/cadastroTelefone";

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

// Importando Listagens
import Listagens from "./pages/listagens";



function App() {
  return (
    <>
      <Routes>

        {/* Clientes */}
        <Route path="/" element={<Cliente />} />
        <Route path="/cliente/:id" element={<ClienteInfo />} />
        <Route path="/cliente/cadastrar" element={<CadastroCliente />} />
        <Route path="/cliente/modificar/:id" element={<ModificarCliente />} />
        <Route path="/cliente/modificar/rg/:id" element={<CadRG />} />
        <Route path="/cliente/modificar/telefone/:id" element={<CadTel />} />
        <Route path="/cliente/excluir/:id" element={<Cliente />} />
        
        {/* Produtos */}
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/cadastrar" element={<CadastroProduto />} />
        <Route path="/produto/modificar/:id" element={<ModificarProduto />} />
        <Route path="/produto/excluir/:id" element={<Produtos />} />

        {/* Serviços */}
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servico/cadastrar" element={<CadastroServico />} />
        <Route path="/servico/modificar/:id" element={<ModificarServico />} />        
        <Route path="/servico/excluir/:id" element={<Servicos />} />

        {/* Listagens */}
        <Route path="/listagens" element={<Listagens />} />

        {/* Pedidos */}
        <Route path="/pedido" element={<Pedido />} />

      </Routes>
    </>
  )
}

export default App;
