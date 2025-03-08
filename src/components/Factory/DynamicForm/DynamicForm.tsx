import { FormProvider, Path } from 'react-hook-form';
import { Flex } from '@chakra-ui/react';
import { TypeOf, z, ZodObject, ZodTypeAny } from 'zod';

import { useNormalizeFields } from "./shared/hooks";
import { getMaxStep } from './shared/utils';
import { ComponentProps, Meta, MetaSchema } from './dynamicForm.types';
import Field from './Field';

export function withMeta<T extends ZodTypeAny>(schema: T, meta?: Meta): MetaSchema {
  const metaSchema = schema as MetaSchema;

  if (meta) metaSchema.meta = meta || {};

  return metaSchema;
}

function DynamicForm<T extends z.ZodEffects<ZodObject<any>>>({
  width, rowsWidth, schema, defaultValues,
  step = 0,
  onNext, onBack,
  render,
}: ComponentProps<T>) {

  // Normalize fields and methods from the schema using a custom hook
  const { fields, methods } = useNormalizeFields(schema, defaultValues);

  const stepFields = fields.length !== 0
    ? Object.entries(fields[step] ?? {})
      .flatMap(([_, fieldArray]) => fieldArray.map(([fieldName]) => fieldName))
    : []

  // Generate rows of fields for the specified step
  const rows = fields.length !== 0
    ? Object.entries(fields[step] ?? {}).map(([key, value]) => {
      switch (key) {

        case "__NO_ROW__": {
          return value.map(([name, fieldSchema]) => (
            <Field
              key={crypto.randomUUID()}
              methods={methods}
              name={name as Path<z.infer<T>>}
              meta={(fieldSchema as MetaSchema).meta ?? undefined}
              fieldSchema={fieldSchema as ZodTypeAny}
            />
          ));
        }

        default: {
          return (
            <Flex key={crypto.randomUUID()}
              width={rowsWidth ?? "full"}
              wrap={'wrap'}
              direction={'row'}
              gap={"0.8rem"}
              justifyContent={'center'}
            >
              {value.map(([name, fieldSchema]) => (
                <Field key={crypto.randomUUID()}
                  methods={methods} name={name as Path<z.infer<T>>}
                  meta={(fieldSchema as MetaSchema).meta ?? undefined}
                  fieldSchema={fieldSchema as ZodTypeAny}
                />
              ))}
            </Flex>
          );
        }

      }
    })
    : [];

  async function next() {
    const isValid = await methods.trigger(stepFields as Path<TypeOf<T>>[]);

    if (isValid) {
      const maxStep = getMaxStep(schema.innerType())
      const nextStep = step + 1

      nextStep <= maxStep
        ? nextStep === maxStep
          ? onNext!(nextStep, true)
          : onNext!(nextStep, false)
        : onNext!(nextStep, false)
    }
  }

  async function back() {
    const maxStep = getMaxStep(schema.innerType()) + 1
    const nextStep = step - 1

    nextStep <= maxStep && nextStep >= 0
      ? nextStep !== maxStep
        ? onBack!(nextStep, false)
        : onBack!(nextStep, false)
      : onBack!(nextStep, false)
  }

  return <Flex flexDirection={'column'} width={width}>
    <FormProvider {...methods}>
      {render
        ? render(rows, methods.handleSubmit, next, back)
        : <>
          {rows}
          <button type="submit">Invia</button>
        </>
      }
    </FormProvider>
  </Flex>
}

export default DynamicForm;
