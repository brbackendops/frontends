import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urls } from '../api';

export const pokemonApi = createApi({
    reducerPath:'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: urls.baseUrl }),
    endpoints: (builder) => ({
        
        pokemonList: builder.query({
            query: () => `/pokemon?limit=20`,
        }),

        getPokemonByName: builder.query({
            query: (name) => `/pokemon/${name}`
        }),
    }),
})


export const { usePokemonListQuery , useGetPokemonByNameQuery } = pokemonApi;
