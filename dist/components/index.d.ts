import * as React$1 from 'react';
import React__default, { JSX } from 'react';
import { FlexProps, StackProps, Card } from '@chakra-ui/react';
import { DefaultValues, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { z, ZodObject, TypeOf, ZodTypeAny } from 'zod';
import * as react_jsx_runtime from 'react/jsx-runtime';

type CoimponentProps = {
    content: string;
};

type ComponentTypes$1 = {
    field?: string;
    value?: string | number | JSX.Element;
}

type ComponentTypes = {
    status: STATUS;
    isEmpty: boolean;
    header?: {
        avatar?: string;
        title?: string;
    },
    subHeader?: {
        content?: React.ReactNode
    },
    body: {
        content: React.ReactNode;
        style?: FlexProps & React.RefAttributes<HTMLDivElement>;
        disableStyle?: boolean;
    },
    empty?: {
        icon?: React.ReactNode;
        title?: string;
        description?: string;
    },
}

type Meta = {
    label?: string;
    labels?: string[];
    row?: string;
    step?: number;
    autocomplete?: string;
    style?: StackProps & React__default.RefAttributes<HTMLDivElement>;
};

interface MetaSchema extends ZodTypeAny {
    meta?: Meta;
}

interface ComponentProps$4<T extends z.ZodEffects<ZodObject<any>>> {
    width?: string;
    schema: T;
    defaultValues?: DefaultValues<TypeOf<T>> | undefined;
    step?: number;
    onNext?: (
        step: number,
        stepComplete: boolean
    ) => void;
    onBack?: (
        step: number,
        stepComplete: boolean
    ) => void;
    render?: (
        rows: React__default.ReactNode[],
        onSubmit: (onValid: SubmitHandler<TypeOf<T>>, onInvalid?: SubmitErrorHandler<TypeOf<T>> | undefined) => (e?: React__default.BaseSyntheticEvent) => Promise<void>,
        onNext?: Function,
        onBack?: Function,
    ) => React__default.ReactNode;
}

declare const inputs: z.ZodObject<{
    /**
     * STEP: 0
     */
    first_name: MetaSchema;
    last_name: MetaSchema;
    bday: MetaSchema;
    /**
     * STEP: 1
     */
    username: MetaSchema;
    gender: MetaSchema;
    /**
     * STEP: 2
     */
    email: MetaSchema;
    confirm_email: MetaSchema;
    password: MetaSchema;
    confirm_password: MetaSchema;
}, "strip", z.ZodTypeAny, {
    password?: any;
    email?: any;
    username?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}, {
    password?: any;
    email?: any;
    username?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}>;
type FormInputs = z.infer<typeof inputs>;

interface ComponentProps$3 {
    children?: React__default.ReactNode
    rootStyle?: Card.RootProps & React__default.RefAttributes<HTMLDivElement>,
    submit: (data: FormInputs) => void,
}

interface ComponentProps$2 {
    root?: Card.RootProps & React.RefAttributes<HTMLDivElement>,
    header?: React.ReactNode
    submit: Function,
    children?: React.ReactNode
}

type Item = Record<string, any>;

type Pagination = {
    offset: number;
    size: number;
    totalOccurrences: number,
    totalPages: number,
}

type ComponentProps$1 = {
    items: Item[];
    hiddenFields?: string[];
    pagination?: Pagination;
}

declare function DynamicForm<T extends z.ZodEffects<ZodObject<any>>>({ width, schema, defaultValues, step, onNext, onBack, render, }: ComponentProps$4<T>): react_jsx_runtime.JSX.Element;

type ComponentProps<T> = {
    schema: T;
}

declare function LiquidSearchForm<T extends z.ZodEffects<ZodObject<any>>>({ schema }: ComponentProps<T>): react_jsx_runtime.JSX.Element;

declare const _default: {
    DynamicForm: typeof DynamicForm;
    LiquidSearchForm: typeof LiquidSearchForm;
    LiquidTable: React$1.FC<ComponentProps$1 & object>;
    LoginForm: React$1.FC<ComponentProps$2>;
    RegisterForm: React$1.FC<ComponentProps$3>;
    SectionCard: React$1.FC<ComponentTypes>;
    SectionCardRow: React$1.FC<ComponentTypes$1>;
    StyledMarkdown: React.FC<CoimponentProps>;
};

export { _default as default };
