export const initialState = {
    basket: [],
    user: null
};

//selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price+amount, 0 );


const reducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_BASKET':
            
                return {
                ...state,
                basket : [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }
            
        
        case 'REMOVE_FROM_BASKET':
            {/* It removes all the quantity of that particulat item id but we dont want this to happen and we want only to delete that particulat product not all the particular id products
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
            */}
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Cant remove the product (id: ${action.id} as its not in the basket)`)
            }
            

            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;