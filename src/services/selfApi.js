import { api } from './api';

export const selfApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSelfDetails: builder.query({
      query: () => ({
        url: '/self',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSelfDetailsQuery } = selfApi;
