import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export interface IRecipeStore {
    recipes: any[];
    recipeSelected: any;

}

const RecipeReducer = createSlice({
    name: 'recipe',
    initialState: {
        recipes: [],
        recipeSelected: null
    } as IRecipeStore,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        setRecipeSelected: (state, action) => {
            state.recipeSelected = action.payload;
        },
        clearRecipeSelected: (state) => {
            state.recipeSelected = null;
        }
    }
})

export const {setRecipes, setRecipeSelected, clearRecipeSelected} = RecipeReducer.actions
export const getAllRecipesStore = (state: RootState) => state.recipes.recipes;
export const getRecipeSelectedStore = (state: RootState) => state.recipes.recipeSelected;

export default RecipeReducer;