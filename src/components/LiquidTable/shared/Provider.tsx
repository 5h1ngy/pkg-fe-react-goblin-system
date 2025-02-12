import React, { createContext, useState, FC } from 'react';
import { parseItems } from './utils';
import { ComponentProps, ContextType } from '../liquidTableComponent.types';

export const Context = createContext<ContextType | undefined>(undefined);

const withContext = <P extends object>(WrappedComponent: React.ComponentType<P>): FC<ComponentProps & P> => {
  const Provider: FC<ComponentProps & P> = (props) => {
    const { columns, rows } = parseItems(props.items, props.hiddenFields);
    const [selection, setSelection] = useState<string[]>([]);

    return (
      <Context.Provider
        value={{
          columns,
          rows,
          pagination: props.pagination,
          select: { selection, setSelection },
        }}
      >
        <WrappedComponent {...props} />
      </Context.Provider>
    );
  };

  return Provider;
};

export default withContext;
