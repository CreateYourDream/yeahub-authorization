import { useAppSelector } from "@/app/store/hooks";
import { useRefreshQuery } from "@/features/auth/api/auth-api";
import { Navigate, Outlet } from "react-router";
import { Spinner } from "@/shared/ui/Spinner";

export const GuestProvider = () => {
    const token = useAppSelector((state) => state.auth.token);
    const isInitialized = useAppSelector((state) => state.auth.isInitialized);


    const { isLoading } = useRefreshQuery(undefined, {
        skip: isInitialized,
    });

    if (isLoading) {
        return <Spinner />;
    }

    return !token ? <Outlet /> : <Navigate to="/" replace />;
};
