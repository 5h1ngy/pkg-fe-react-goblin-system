import { Controller, ControllerRenderProps, Path } from 'react-hook-form';
import { z, ZodEnum, ZodObject, ZodType } from 'zod';
import { Select } from 'chakra-react-select';
import { Input, VStack } from "@chakra-ui/react";

import { Field } from "@/components/Factory/Chakra/field"
import { ComponentProps } from './dynamicFormFactory.field.props';
import { Checkbox } from '../Chakra/checkbox';
import { getBaseType } from './dynamicFormFactory.utils';

function Component<T extends ZodObject<any>>({ methods, name, meta, fieldSchema, }: ComponentProps<T>) {
  const baseSchema = getBaseType(fieldSchema);

  function checkInputType(key: string): string {
    if (
      baseSchema instanceof z.ZodString &&
      key.toLowerCase().includes("password")
    ) {
      return "password"

    } else if (
      baseSchema instanceof z.ZodString &&
      key.toLowerCase().includes("email")
    ) {
      return "email"

    } else if (
      baseSchema instanceof z.ZodDate
    ) {
      return "date"

    } else {
      return "text"

    }
  }

  function checkRenderType<T extends ZodType<any, any, any>>(field: ControllerRenderProps<z.TypeOf<T>, Path<z.TypeOf<T>>>) {

    if (
      baseSchema instanceof z.ZodString ||
      baseSchema instanceof z.ZodDate
    ) {
      return <VStack {...!meta?.style ? { width: "100%" } : { ...meta?.style }} alignItems={'left'}>
        <Field
          label={meta?.label && meta.label}
          invalid={methods.formState.errors[name] !== undefined}
          errorText={methods.formState.errors[name]?.message as string}
        >
          <Input
            disabled={field.disabled}
            type={checkInputType(name)}
            ref={field.ref}
            id={name}
            name={name}
            autoComplete={meta?.autocomplete ?? ""}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value ?? ""}
          />
        </Field>
      </VStack>

    } else if (baseSchema instanceof ZodEnum) {
      const zodSchemaEnum = baseSchema as ZodEnum<[string, ...string[]]>;

      type OptionType = {
        label: string;
        value: string;
      };

      const options = zodSchemaEnum!.options.map((value, index) => ({
        label: meta?.labels?.[index] ?? "",
        value: value ?? null
      }))

      return <Field
        label={meta?.label && meta.label}>
        <Select<OptionType>
          {...field}
          options={options}
          value={options.find(option => option.value === field.value) || null}  // Imposta `null` invece di `undefined`
          onChange={(selectedOption) => field.onChange(selectedOption ? selectedOption.value : null)}  // Imposta `undefined` se vuoto
          placeholder={meta?.label ? `Select ${meta?.label}` : undefined}
          defaultValue={null}
        />
      </Field>

    } else if (baseSchema instanceof z.ZodBoolean) {

      return <Field
        invalid={methods.formState.errors[name] !== undefined}
        errorText={methods.formState.errors[name]?.message as string}
      >
        <Checkbox
          {...field}
          variant={"solid"}
          disabled={field.disabled}
          // ref={field.ref}
          id={name}
          name={name}
          checked={field.value ?? false}
          onCheckedChange={({ checked }) => field.onChange(checked)}
        // onBlur={field.onBlur}
        // onChange={field.onChange}
        // value={field.value ?? ""}
        >
          {meta?.label}
        </Checkbox>
      </Field>

    }

    return <></>
  }

  return (
    <Controller
      key={crypto.randomUUID()}
      name={name}
      control={methods.control}
      render={({ field }) => checkRenderType(field)}
    />
  );
}

export default Component;
