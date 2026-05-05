import { baseApi } from "@/features/session/api";
import type { ExtraArgument } from "@/app/store/types";
import { logout, login } from "@/features/auth/model";
import type { LoginCredentials, Response, RegisterCredentials, RegisterResponse } from "./type";
import { clearUser, setUser } from "@/entities/user";
import { logger } from "@/shared/lib/logger";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<Response, LoginCredentials>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    dispatch(login({ token: result.data.access_token }))
                    dispatch(setUser(result.data.user))
                } catch (error) {
                    dispatch(logout())
                }
            },
        }),
        register: build.mutation<RegisterResponse, RegisterCredentials>({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(login({ token: data.access_token }))
                    dispatch(setUser(data.user))
                } catch (error) {
                    logger.error("Error registering", error);
                }
            },
        }),
        logout: build.mutation<string, void>({
            query: () => ({
                url: '/auth/logout',
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch, extra }) => {
                const typedExtra = extra as ExtraArgument;
                try {
                    await queryFulfilled;
                    dispatch(logout());
                    dispatch(clearUser());
                    dispatch(baseApi.util.resetApiState());
                    typedExtra.navigate('/login');
                } catch (error) {
                    logger.error("Error logging out", error);
                }
            },
        }),
        refresh: build.query<Response, void>({
            query: () => ({
                url: '/auth/refresh',
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    dispatch(login({ token: result.data.access_token }))
                    dispatch(setUser(result.data.user))
                } catch (error) {
                    dispatch(logout());
                    dispatch(baseApi.util.resetApiState());
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useRefreshQuery } = authApi;