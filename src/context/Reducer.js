const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': return {...state, products: action.payload};
        case 'ADD_PRODUCTS': return {...state, products: action.products.concat(action.payload)};
        case 'REMOVE_PRODUCTS': return {...state, products: action.products.filter(i => i.id !== action.payload)};
        case 'SET_ERROR': return {...state, error: action.payload};
        default: return state;
    }
};

export default Reducer;