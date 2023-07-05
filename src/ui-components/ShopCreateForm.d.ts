/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShopCreateFormInputValues = {
    phone?: string;
    email?: string;
    description?: string;
    shopName?: string;
};
export declare type ShopCreateFormValidationValues = {
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    shopName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopCreateFormOverridesProps = {
    ShopCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    shopName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShopCreateFormProps = React.PropsWithChildren<{
    overrides?: ShopCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShopCreateFormInputValues) => ShopCreateFormInputValues;
    onSuccess?: (fields: ShopCreateFormInputValues) => void;
    onError?: (fields: ShopCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShopCreateFormInputValues) => ShopCreateFormInputValues;
    onValidate?: ShopCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShopCreateForm(props: ShopCreateFormProps): React.ReactElement;
