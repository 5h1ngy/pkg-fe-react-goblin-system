import { StackProps } from '@chakra-ui/react';
import React from 'react';
import { DefaultValues, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { TypeOf, z, ZodObject, ZodTypeAny } from 'zod';
export type Meta = {
    label?: string;
    labels?: string[];
    row?: string;
    step?: number;
    autocomplete?: string;
    style?: StackProps & React.RefAttributes<HTMLDivElement>;
};
export interface MetaSchema extends ZodTypeAny {
    meta?: Meta;
}
export interface ComponentProps<T extends z.ZodEffects<ZodObject<any>>> {
    width?: string;
    rowsWidth?: string;
    schema: T;
    defaultValues?: DefaultValues<TypeOf<T>> | undefined;
    step?: number;
    onNext?: (step: number, stepComplete: boolean) => void;
    onBack?: (step: number, stepComplete: boolean) => void;
    render?: (rows: React.ReactNode[], onSubmit: (onValid: SubmitHandler<TypeOf<T>>, onInvalid?: SubmitErrorHandler<TypeOf<T>> | undefined) => (e?: React.BaseSyntheticEvent) => Promise<void>, onNext?: Function, onBack?: Function) => React.ReactNode;
}
