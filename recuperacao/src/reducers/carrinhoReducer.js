export const carrinhoReducer = (state, action) =>{
    
    switch (action.type){
        case 'ADD_CARRINHO':
            const checkIfCarrinhoAlreadyExists = state.filter(carrinho =>(
                carrinho.id === action.payload.id
            ));
            if (!checkIfCarrinhoAlreadyExists.length){
                return [...state, action.payload];
            }
            return state;
        case 'REMOVE_CARRINHO':
            return state.filter(carrinho =>(
                carrinho.id !== action.payload.id
            ))
        default:
            return state;
    }
}