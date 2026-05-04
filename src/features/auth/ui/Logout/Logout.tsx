import { useLogoutMutation } from "@/features/auth/api/auth-api";
import { Button } from "@/shared/ui/Buttons/Button";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import type { ApiErrorResponse } from "@/shared/lib/errorMessage/handleFormError";
import { useState } from "react";

interface Props {
  className?: string;
}
export function Logout({ className }: Props) {
  const [logout, { isLoading }] = useLogoutMutation();
  const [errorMessage, setErrorMessage] = useState<string>('');
  async function handleLogout() {
    try {
      await logout().unwrap();
    } catch (caughtError) {
      const errorMessage = caughtError as ApiErrorResponse;
      setErrorMessage(errorMessage.data?.message || 'Произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  }

  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Button className={className} variant="logout" text="Выход" onClick={handleLogout} disabled={isLoading} />
    </>
  );
}
