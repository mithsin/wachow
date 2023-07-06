/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Shop } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShopUpdateFormInputValues = {
    phone?: string;
    email?: string;
    description?: string;
    shopName?: string;
};
export declare type ShopUpdateFormValidationValues = {
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    shopName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopUpdateFormOverridesProps = {
    ShopUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    shopName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShopUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShopUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shop?: Shop;
    onSubmit?: (fields: ShopUpdateFormInputValues) => ShopUpdateFormInputValues;
    onSuccess?: (fields: ShopUpdateFormInputValues) => void;
    onError?: (fields: ShopUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShopUpdateFormInputValues) => ShopUpdateFormInputValues;
    onValidate?: ShopUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShopUpdateForm(props: ShopUpdateFormProps): React.ReactElement;
