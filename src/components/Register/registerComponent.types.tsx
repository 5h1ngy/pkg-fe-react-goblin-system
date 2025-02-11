import { Card } from '@chakra-ui/react';
import React from 'react';
import { FormInputs } from './RegisterComponent.form';

export interface ComponentProps {
    children?: React.ReactNode
    rootStyle?: Card.RootProps & React.RefAttributes<HTMLDivElement>,
    submit: (data: FormInputs) => void,
}
