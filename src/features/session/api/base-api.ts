import { createApi, fetchBaseQuery, type BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { setUser } from "@/entities/user";
import { login, logout } from "@/features/auth/model";
import type { Token } from "@/features/auth/model/type";
import type { User } from "@/entities/user";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.yeatwork.ru/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as { auth: { token: string | null } }).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 && args.url !== "/auth/refresh") {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    type AuthResponse = {
      access_token: Token;
      user: User;
    };

    if (refreshResult.data) {
      const { access_token, user } = refreshResult.data as AuthResponse;
      api.dispatch(login({ token: access_token }));
      api.dispatch(setUser(user));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
