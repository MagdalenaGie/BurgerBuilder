import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredienta = {[action.ingredientName] : state.ingredients[action.ingredientName] + 1};
    const updatedIngredientsa = updateObject(state.ingredients, updatedIngredienta);
    const updatedState = {
        ingredients: updatedIngredientsa,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngredientr = {[action.ingredientName] : state.ingredients[action.ingredientName] - 1};
    const updatedIngredientsr = updateObject(state.ingredients, updatedIngredientr);
    const updatedStater = {
        ingredients: updatedIngredientsr,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedStater);
}

const setIngredients = (state, action) => {
    return updateObject(state, 
        {ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
            
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
            
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});

        default:
            return state;
    }
};

export default reducer;