import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { ERROR_MESSAGES } from '@/shared/constants/errorMessages';


type ServerError = {
    message: keyof typeof ERROR_MESSAGES;
    statusCode: number;
    description: string;
};

export type ApiErrorResponse = {
    data?: ServerError;
    status?: number;
};

export const handleFormError = <T extends FieldValues>(
    error: ApiErrorResponse,
    setError: UseFormSetError<T>
) => {
    const errorKey = error.data?.message;
    const config = (errorKey && ERROR_MESSAGES[errorKey]) || ERROR_MESSAGES.common;
    
    const fieldName = config.field === 'root' 
        ? 'root.serverError' 
        : config.field;
    
    setError(fieldName as Path<T>, {
        type: config.type || 'server',
        message: config.message,
    });
};
