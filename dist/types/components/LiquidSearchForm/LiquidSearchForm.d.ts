import { z, ZodObject } from 'zod';
import { ComponentProps } from "./liquidSearchForm.types";
declare function LiquidSearchForm<T extends z.ZodEffects<ZodObject<any>>>({ schema, submit }: ComponentProps<T>): import("react/jsx-runtime").JSX.Element;
export default LiquidSearchForm;
