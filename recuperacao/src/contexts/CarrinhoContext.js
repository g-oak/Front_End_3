import { createContext, useReducer, useEffect } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";


export const CarrinhoContext = createContext();

const CarrinhoContextProvider = ({children}) =>{
    const[produtosCarrinho, dispatch] = useReducer(carrinhoReducer,[],()=>{
        const localData = localStorage.getItem('carrinho');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(()=>{
        localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
        
    },[produtosCarrinho]);

    const addProduto = (produto) => dispatch({type: 'ADD_CARRINHO', payload: produto });
    const removeProduto = (produto) => dispatch({type: 'REMOVE_CARRINHO', payload: produto });

    return(
        <CarrinhoContext.Provider value={{produtosCarrinho, addProduto, removeProduto}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoContextProvider;