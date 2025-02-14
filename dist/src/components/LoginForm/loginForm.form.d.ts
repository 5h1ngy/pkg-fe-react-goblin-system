import { z } from 'zod';
declare const schema: z.ZodEffects<z.ZodObject<{
    id: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    password: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    stay_logged: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
}, "strip", z.ZodTypeAny, {
    id?: any;
    password?: any;
    stay_logged?: any;
}, {
    id?: any;
    password?: any;
    stay_logged?: any;
}>, {
    id?: any;
    password?: any;
    stay_logged?: any;
}, {
    id?: any;
    password?: any;
    stay_logged?: any;
}>;
declare const inputs: z.ZodObject<{
    id: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    password: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    stay_logged: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
}, "strip", z.ZodTypeAny, {
    id?: any;
    password?: any;
    stay_logged?: any;
}, {
    id?: any;
    password?: any;
    stay_logged?: any;
}>;
type FormInputs = z.infer<typeof inputs>;
export { schema };
export type { FormInputs };
