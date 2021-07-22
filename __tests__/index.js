import React from 'react';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    beforeEach(() => {
        jest.resetModules();
    })
    test('renders', async () => {
        const App = (await import('../src')).default;
        render(<App />);
        expect(screen.getByText('I am not mobile.')).toBeInTheDocument();
    })
    describe('Mobile', () => {
        beforeEach(() => {
            jest.doMock('../src/utils', () => ({
                isMobile: true
            }));
        })
        test('renders', async () => {
            const App = (await import('../src')).default;
            render(<App />);
            expect(screen.getByText('I am mobile.')).toBeInTheDocument();
        })
    });
})