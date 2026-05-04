export type Token = string | null;

export interface AuthState {
  isInitialized: boolean;
  token: Token;
}

export type { Permission, UserRole, User } from "@/entities/user";