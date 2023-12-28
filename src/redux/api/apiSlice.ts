import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://technet-server-jqfq4s7gu-rizwanulwahid612-gmailcom.vercel.app',
  }),
  tagTypes: ['comments'],
  endpoints: () => ({}),
});
//http://localhost:5000
//https://technet-server-jqfq4s7gu-rizwanulwahid612-gmailcom.vercel.app
