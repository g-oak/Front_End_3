import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main";
import Carrinho from "../Carrinho";
import NotFound from "../NotFound";
import CarrinhoContextProvider from "../contexts/CarrinhoContext";

const RouteList = () => (
    <BrowserRouter>
    <CarrinhoContextProvider>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </CarrinhoContextProvider>
    </BrowserRouter>
);

export default RouteList;