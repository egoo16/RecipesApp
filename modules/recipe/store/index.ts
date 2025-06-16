import { recipeApi } from "../services/recipes.service";
import RecipeReducer from "./recipes.slice";
import ViewsReducer from "./views.slice";

export const RecipesStoreRedux = {
    recipes: RecipeReducer.reducer,
    views: ViewsReducer.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer
}
