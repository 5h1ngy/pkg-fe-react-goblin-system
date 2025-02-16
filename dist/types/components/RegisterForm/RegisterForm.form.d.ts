import { z } from 'zod';
declare const schema: z.ZodEffects<z.ZodObject<{
    /**
     * STEP: 0
     */
    first_name: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    last_name: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    bday: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    /**
     * STEP: 1
     */
    username: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    gender: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    /**
     * STEP: 2
     */
    email: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    confirm_email: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    password: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    confirm_password: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
}, "strip", z.ZodTypeAny, {
    email?: any;
    username?: any;
    password?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}, {
    email?: any;
    username?: any;
    password?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}>, {
    email?: any;
    username?: any;
    password?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}, {
    email?: any;
    username?: any;
    password?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}>;
declare const inputs: z.ZodObject<{
    /**
     * STEP: 0
     */
    first_name: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    last_name: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    bday: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    /**
     * STEP: 1
     */
    username: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    gender: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    /**
     * STEP: 2
     */
    email: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    confirm_email: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    password: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
    confirm_password: import("../Factory/DynamicForm/dynamicForm.types").MetaSchema;
}, "strip", z.ZodTypeAny, {
    email?: any;
    username?: any;
    password?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}, {
    email?: any;
    username?: any;
    password?: any;
    first_name?: any;
    last_name?: any;
    bday?: any;
    gender?: any;
    confirm_email?: any;
    confirm_password?: any;
}>;
type FormInputs = z.infer<typeof inputs>;
export { schema };
export type { FormInputs };
