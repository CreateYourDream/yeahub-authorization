import styles from './FormPasswordField.module.scss';
import { EyeButton } from '@/shared/ui/Buttons/EyeButton';
import { FormField, type FormFieldProps } from '@/shared/ui/FormField';
import type { FieldValues } from 'react-hook-form';
import clsx from 'clsx';
import { usePasswordToggle } from '@/shared/lib/hooks';



export const FormPasswordField = <T extends FieldValues>({
    className,
    error,
    ...props
}: FormFieldProps<T>) => {
    const { isVisible, inputType, toggle } = usePasswordToggle(false);

    return (
        <div className={clsx(className, styles.formPasswordField)}>
            <FormField {...props} type={inputType} className={styles.formInput} error={error}  />
            <EyeButton isVisible={isVisible} onClick={toggle} error={error}
                className={styles.eyeButton}
            />
        </div>
    );
};
