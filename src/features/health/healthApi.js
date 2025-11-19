import { api } from "../../app/api";

export const healthApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHealthStatus: build.query({
      query: () => "/health",
      transformResponse: (response) => response,
      providesTags: ["Health"],
    }),
  }),
});

export const { useGetHealthStatusQuery } = healthApi;