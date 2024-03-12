import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    credentials: 'include',
  }),

  // endpoints are empty because i have split endpoints into different file by using injectEndpoint
  endpoints: () => ({}),
});
