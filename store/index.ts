import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { RecipesStoreRedux } from "../modules/recipe/store";
import { recipeApi } from "../modules/recipe/services/recipes.service";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    ...RecipesStoreRedux
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(recipeApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;