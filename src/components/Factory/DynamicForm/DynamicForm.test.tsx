import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { z } from 'zod';

import DynamicForm, { withMeta } from './DynamicForm';

const schema = z.object({
    name: withMeta(z.string().min(2), { label: 'Name' }),
    age: withMeta(z.number().min(18), { label: 'Age' }),
}).superRefine(() => { });;

describe('DynamicForm Component', () => {
    test('renders form correctly', () => {
        render(<DynamicForm width='400px' schema={schema} defaultValues={{ name: '', age: 18 }} />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Age')).toBeInTheDocument();
    });

    test('triggers next function on Next button click', () => {
        const onNext = jest.fn();
        render(
            <DynamicForm
                width='400px'
                schema={schema}
                defaultValues={{ name: '', age: 18 }}
                onNext={onNext}
            />
        );
        fireEvent.click(screen.getByText('Next'));
        expect(onNext).toHaveBeenCalled();
    });

    test('triggers back function on Back button click', () => {
        const onBack = jest.fn();
        render(
            <DynamicForm
                width='400px'
                schema={schema}
                defaultValues={{ name: '', age: 18 }}
                onBack={onBack}
            />
        );
        fireEvent.click(screen.getByText('Back'));
        expect(onBack).toHaveBeenCalled();
    });
});
