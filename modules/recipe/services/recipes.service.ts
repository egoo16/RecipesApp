import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponseCategoriesMeal, IResponseMealList } from "../interfaces/recipes";

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.themealdb.com/api/json/v1/1',
    }),
    endpoints: (builder) => ({
        getCategories: builder.query<IResponseCategoriesMeal, void>({
            query: () => ({
                url: '/categories.php',
            }),
        }),
        getRecipesByCategory: builder.query<IResponseMealList, string>({
            query: (category) => ({
                url: `/filter.php?c=${category}`,
            }),
        }),
        getRecipeDetails: builder.query({
            query: (id) => ({
                url: `/lookup.php?i=${id}`,
            }),
        }),
    }),
})

export const { useGetCategoriesQuery,
    useGetRecipesByCategoryQuery,
    useGetRecipeDetailsQuery, } = recipeApi;