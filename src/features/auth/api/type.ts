import type { User } from "@/features/auth/model";

export type LoginCredentials = {
    username: string;
    password: string;
};
export type Response = {
    access_token: string;
    user: User;
};

export type RegisterCredentials = {
    username: string;
    email: string;
    password: string;
};
export type RegisterResponse = {
    access_token: string;
    user: User;
};
export type RefreshTokenCredentials = {
    refresh_token: string;
};